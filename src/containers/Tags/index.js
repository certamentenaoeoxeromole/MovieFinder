import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { getApiGenres } from "~/redux/actions/movieAction";

import { TagsContainer, TagsHat } from "./styled";

class Tags extends Component {
  renderTag = () => {
    const { genres } = this.props.state;
    if (genres) {
      return genres
        .filter((genre, index) => {
          return genre.id === this.props.genresIds[index];
        })
        .map((item, index) => (
          <TagsContainer key={index} title={item.name}>
            <TagsHat>{item.name}</TagsHat>
          </TagsContainer>
        ));
    }
  };

  render() {
    return this.renderTag() || <span />;
  }
}

Tags.defaultProps = {
  genreIds: []
};
Tags.propTypes = {
  genresIds: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  state: state.movieReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getApiGenres }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tags);
