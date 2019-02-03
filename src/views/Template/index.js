import React, { Component, Fragment } from "react";
import Routes from "~/routes";

import Header from "~/components/Header/index";
import { BrowserRouter } from "react-router-dom";

import { bindActionCreators } from "redux";

import { connect } from "react-redux";

import { getApiGenres } from "~/redux/actions/movieAction";

class Template extends Component {
  componentDidMount() {
    this.props.getApiGenres();
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <Routes />
        </Fragment>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getApiGenres }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Template);
