import React, { Fragment } from "react";
import { Card } from "~/components/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { List } from "react-content-loader";

const RenderCard = (movie, props) => {
  console.log(props.state);
  if (props.state.requestSearchLoad) {
    return <List />;
  }
  return (
    movie &&
    movie[props.state.pagination.currentPagination].map((info, index) => {
      return (
        <Link to={`/single/${info.id}`} key={index}>
          <Card {...info} key={info.id} />
        </Link>
      );
    })
  );
};

const CardList = props => {
  const card = props.state.pagination && props.state.pagination.movies;
  return <section>{RenderCard(card, props)}</section> || <Fragment />;
};

const mapStateToProps = state => ({
  state: state.movieReducer
});

export default connect(
  mapStateToProps,
  null
)(CardList);
