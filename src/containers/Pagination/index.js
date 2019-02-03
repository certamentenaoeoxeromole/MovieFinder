import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Radius } from "~/components/index";
import { bindActionCreators } from "redux";

import { setPagination } from "~/redux/actions/movieAction";

import {
  PaginationContainer,
  PaginationItem,
  PaginationActive
} from "./styled";
class Pagination extends Component {
  renderPagination = () => {
    if (this.props.state.pagination) {
      console.log(this.props.state.pagination);
      const { totalPag, currentPagination } = this.props.state.pagination;
      return totalPag.map(item => {
        return (
          <PaginationItem onClick={() => this.setPage(item)}>
            {item === currentPagination ? (
              <PaginationActive>{item}</PaginationActive>
            ) : (
              item
            )}
          </PaginationItem>
        );
      });
    }
  };

  setPage = page => {
    this.props.setPagination(page);
  };

  render() {
    console.log(this.props);
    return <PaginationContainer>{this.renderPagination()}</PaginationContainer>;
  }
}

const mapStateToProps = state => ({
  state: state.movieReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setPagination }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
