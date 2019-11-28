import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/homepage/homepage";

const HatsPage = () => (
  <div>
    <h1>HATS Page</h1>
  </div>
);
function App() {
  return (
    <div>
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
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
