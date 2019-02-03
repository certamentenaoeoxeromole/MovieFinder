import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setPagination } from "~/redux/actions/movieAction";

import {
  PaginationContainer,
  PaginationItem,
  PaginationActive
} from "./styled";
class Pagination extends Component {
  renderPagination = () => {
    const { pagination, requestSearchLoad } = this.props.state;
    if (requestSearchLoad) {
      return;
    }
    if (pagination) {
      const { totalPag, currentPagination } = this.props.state.pagination;
      return totalPag.map(item => {
        return (
          <PaginationItem onClick={() => this.setPage(item)} key={item}>
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
