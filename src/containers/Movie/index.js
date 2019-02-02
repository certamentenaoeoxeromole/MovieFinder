import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getApiMovie } from "~/redux/actions/movieAction";

class Movie extends Component {
  componentDidMount() {
    this.props.getApiMovie(this.props.match.params.id);
  }
  render() {
    console.log(this.props);
    return <div>Movie</div>;
  }
}

const mapStateToProps = state => ({
  state: state.movieReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getApiMovie }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
