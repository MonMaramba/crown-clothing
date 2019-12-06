import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page";

import { auth } from "./firebase/firebase";

// const HatsPage = () => (
//   <div>
//     <h1>HATS Page</h1>
//   </div>
// );
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  // property on class
  unsubscribeFromAuth = null;

  componentDidMount() {
    // communication between app and firebase is always open as long as component is in the DOM
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      // will give a function that will close the communication when called
      this.setState({ current: user });
    });
  }

  componentWillUnmount() {
    // to close the subscription when component is unmounted
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        {/*Header component placed outside of <Switch>component will always be rendered whichever route is rendered */}
        <Switch>
          {/* when Switch finds exact route match, it will only render that
        component */}
          <Route
            exact
            /*boolean value, true by default */

            path="/"
            /* string value, / is the base */

            component={Homepage}
            //main arguments exact path component(component to be rendered)
          />
          {/* <Route exact path="/hats" component={HatsPage} /> */}
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
        {/* <Homepage /> */}
      </div>
    );
  }
}
export default App;
