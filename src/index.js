import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // Component that will wrap around our App
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    {/* BrowserRouter component that will provide all routing functionalities of
    that library */}
    {/*  */}
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
