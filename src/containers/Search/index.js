import React, { Component } from "react";
import { SearchInput } from "./styled";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { handleSearch } from "~/redux/actions/movieAction";

class Search extends Component {
  render() {
    const { searchValue } = this.props.state;
    const { handleSearch } = this.props;
    return (
      <SearchInput
        type="text"
        placeholder="Busque um filme por nome, ano ou gênero"
        value={searchValue}
        onChange={e => handleSearch(e)}
      />
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleSearch }, dispatch);

const mapStateToProps = state => ({
  state: state.movieReducer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
