import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getApiGenres } from "~/redux/actions/movieAction";

import { TagsContainer, TagsHat } from "./styled";
class Tags extends Component {
  componentDidMount() {
    this.props.getApiGenres();
  }

  renderTag = () => {
    const { genres } = this.props.state;
    console.log(this.props.genresIds);
    if (genres) {
      return genres
        .filter((genre, index) => {
          return genre.id === this.props.genresIds[index];
        })
        .map((item, index) => (
          <TagsContainer key={index + 1}>
            <TagsHat>{item.name}</TagsHat>
          </TagsContainer>
        ));
    }
  };

  render() {
    return this.renderTag() || <span />;
  }
}

const mapStateToProps = state => ({
  state: state.movieReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getApiGenres }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tags);
