import React, { Fragment } from "react";
import { Card } from "~/components/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const RenderCard = movie =>
  movie &&
  movie.map(info => {
    return (
      <Link to={`/single/${info.id}`}>
        <Card {...info} key={info.id} />
      </Link>
    );
  });

const CardList = props => {
  const card = props.state.movies && props.state.movies.results;
  return <section>{RenderCard(card)}</section> || <Fragment />;
};

const mapStateToProps = state => ({
  state: state.movieReducer
});

export default connect(
  mapStateToProps,
  null
)(CardList);
