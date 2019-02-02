import React, { Fragment } from "react";
import Header from "~/components/Header/index";
import Search from "~/containers/Search/index";
import { CardList } from "~/containers/index";
import { Container } from "~/theme/index";

const Index = () => (
  <Fragment>
    <Header />
    <Container>
      <main>
        <Search />
        <CardList />
      </main>
    </Container>
  </Fragment>
);

export default Index;
