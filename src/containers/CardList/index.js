import React from "react";
import { Card } from "~/components/index";
import { connect } from "react-redux";

const RenderCard = movie =>
  movie &&
  movie.map(info => {
    return <Card {...info} />;
  });

const CardList = props => {
  const Card = props.state.movies && props.state.movies.results;
  console.log(props);
  return RenderCard(Card) || <div />;
};

const mapStateToProps = state => ({
  state: state.movieReducer
});

export default connect(
  mapStateToProps,
  null
)(CardList);
