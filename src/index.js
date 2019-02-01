import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Index } from "~/views";
import { Font, ResetCSS } from "~/theme/index";

ReactDOM.render(
  <Fragment>
    <Index />
    <ResetCSS />
    <Font />
  </Fragment>,
  document.getElementById("MovieFinder")
);
