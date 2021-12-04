import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./i18n.jsx";
import { applyMiddleware, createStore } from "redux";
import reducers from "./redux/reducers";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
