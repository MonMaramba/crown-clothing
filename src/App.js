import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";

// const HatsPage = () => (
//   <div>
//     <h1>HATS Page</h1>
//   </div>
// );
function App() {
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
      </Switch>
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
