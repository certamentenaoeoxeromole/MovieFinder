import React, { Fragment } from "react";
import Routes from "~/routes";

import Header from "~/components/Header/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Template = props => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <Routes />
    </Fragment>
  </BrowserRouter>
);

export default Template;
