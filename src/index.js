import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
//css
import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";
import store from "./store/store";

const history = createHistory();

const app = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));
