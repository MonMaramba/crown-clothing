// actual base reducer object that represents all of the state of the app
// code that combines all of the states of our app
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// Will give access to the actual localStorage of our browser
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart-reducer";
import directoryReducer from "./directory/directory-reducer";
import shopReducer from "./shop/shop-reducer";

// config for redux-persist to use
const persistConfig = {
  key: "root", // starts storing at the root
  storage, // This is where the key goes to
  // whitelist is a list of things that we want persisted
  // user functionalities are handled by firebase hence we only
  // will persist the cart
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});
// export default combineReducers({
//   user: userReducer,
//   cart: cartReducer
// });
// new export default to take in persistConfig
export default persistReducer(persistConfig, rootReducer);
