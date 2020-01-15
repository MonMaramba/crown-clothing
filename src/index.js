import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // Component that will wrap around our App
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

import "./index.css";
import App from "./App";

ReactDOM.render(
  //{/* Provider is the parent component that provides access to the store*/}
  <Provider store={store}>
    <BrowserRouter>
      {/* BrowserRouter component that will provide all routing functionalities of
    that library */}
      {/* <PersistGate has access tot he store and can fire off actions that can re-hydrate the state when app refreshes */}
      <PersistGate persistor={persistor}>
        {/* <App /> will have access to the persistence flow */}
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
