import React, { Fragment } from "react";
import { CardList, Search } from "~/containers/index";

const MoviesList = () => {
  return (
    <Fragment>
      <Search />
      <CardList />
    </Fragment>
  );
};

export default MoviesList;
