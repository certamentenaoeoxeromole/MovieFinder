import React from "react";
import ReactDOM from "react-dom";
import { Template } from "~/views";
import { Font, ResetCSS } from "~/theme/index";
import { Provider } from "react-redux";
import store from "~/redux/store/index";

ReactDOM.render(
  <Provider store={store}>
    <Template />
    <ResetCSS />
    <Font />
  </Provider>,
  document.getElementById("MovieFinder")
);
