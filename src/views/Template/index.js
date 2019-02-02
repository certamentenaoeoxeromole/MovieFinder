import React, { Fragment } from "react";
import Routes from "~/routes";

import Header from "~/components/Header/index";
import { Container } from "~/theme/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Template = props => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <Container>
        <Routes />
      </Container>
      <h1>footer</h1>
    </Fragment>
  </BrowserRouter>
);

export default Template;
