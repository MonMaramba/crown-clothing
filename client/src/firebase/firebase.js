import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAA93_rixdL3reLl5NTRnD8Pyf2yseEv0Q",
  authDomain: "crowndb-c5b35.firebaseapp.com",
  databaseURL: "https://crowndb-c5b35.firebaseio.com",
  projectId: "crowndb-c5b35",
  storageBucket: "crowndb-c5b35.appspot.com",
  messagingSenderId: "530255691782",
  appId: "1:530255691782:web:848d781a24d93ca1848387",
  measurementId: "G-H918PPP17S"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); // Checks if user is already in the database

  const snapShot = await userRef.get(); // will return the document snapshot

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        // writes to document reference and creates properties
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  // .commit calls batch. .commit returns a promise
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      // encodeURI is a JS render method that converts non url readable data(spaces, symbols, etc) into something that the url can 'see'
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  // recursive return call to build the collections object from the array that firebase gives us
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
