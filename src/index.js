import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./reducers";
import App from "./containers/app";
import "./index.scss";

const store = createStore();

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
   document.getElementById("root")
);