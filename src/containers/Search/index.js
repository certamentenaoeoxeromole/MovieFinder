import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { handleSearch } from "~/redux/actions/movieAction";

import { SearchInput } from "./styled";

class Search extends Component {
  render() {
    const { searchValue } = this.props.state;
    const { handleSearch } = this.props;
    return (
      <SearchInput
        type="text"
        placeholder="Busque um filme por nome"
        value={searchValue}
        onChange={e => handleSearch(e)}
      />
    );
  }
}

const mapStateToProps = state => ({
  state: state.movieReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleSearch }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
