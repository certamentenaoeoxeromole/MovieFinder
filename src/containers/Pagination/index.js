import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setPagination } from "~/redux/actions/movieAction";

import { RadiusPagination, RadiusHat } from "~/theme/index";

import { PaginationContainer, PaginationItem } from "./styled";

class Pagination extends Component {
  setPage = page => {
    this.props.setPagination(page);
  };

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
              <RadiusPagination>
                <RadiusHat>{item}</RadiusHat>
              </RadiusPagination>
            ) : (
              item
            )}
          </PaginationItem>
        );
      });
    }
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
