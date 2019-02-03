import React, { Fragment } from "react";
import { connect } from "react-redux";

import { Card } from "~/components/index";
import { Link } from "react-router-dom";
import { List } from "react-content-loader";

const RenderCard = props => {
  if (props.state.requestSearchLoad) {
    return <List />;
  }

  if (!props.state.pagination) return;

  const movie = props.state.pagination.movies;

  if (!movie[props.state.pagination.currentPagination]) {
    return <div>Nenhum elemento encontrado</div>;
  }
  return movie[props.state.pagination.currentPagination].map((info, index) => {
    return (
      <Link to={`/single/${info.id}`} key={index}>
        <Card {...info} key={info.id} />
      </Link>
    );
  });
};

const CardList = props => {
  return <section>{RenderCard(props)}</section> || <Fragment />;
};

const mapStateToProps = state => ({
  state: state.movieReducer
});

export default connect(
  mapStateToProps,
  null
)(CardList);
