import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // Component that will wrap around our App

import { Provider } from "react-redux";
import store from "./redux/store";

import "./index.css";
import App from "./App";

ReactDOM.render(
  //{/* Provider is the parent component that provides access to the store*/}
  <Provider store={store}>
    <BrowserRouter>
      {/* BrowserRouter component that will provide all routing functionalities of
    that library */}

      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
