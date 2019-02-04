import React from "react";

import { CardList, Search, Pagination } from "~/containers/index";

import { Container } from "~/theme/index";

const MoviesList = () => {
  return (
    <Container>
      <Search />
      <CardList />
      <Pagination />
    </Container>
  );
};

export default MoviesList;
