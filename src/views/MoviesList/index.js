import React, { Fragment } from "react";
import { CardList, Search } from "~/containers/index";
import { Container } from "~/theme/index";

const MoviesList = () => {
  return (
    <Fragment>
      <Container>
        <Search />
        <CardList />
      </Container>
    </Fragment>
  );
};

export default MoviesList;
