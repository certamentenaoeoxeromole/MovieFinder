import React, { Fragment } from "react";
import Header from "~/components/Header/index";
import Search from "~/containers/Search/index";
import { Container } from "~/theme/index";

const Index = () => (
  <Fragment>
    <Header />
    <Container>
      <Search />
    </Container>
  </Fragment>
);

export default Index;
