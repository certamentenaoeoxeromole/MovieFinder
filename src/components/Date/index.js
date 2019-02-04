import React from "react";
import PropTypes from "prop-types";

import { DateContainer, DateHat } from "./styled";

const Date = ({ value, float }) => {
  const dateSplited = value.split("-");
  const dateFormated = `${dateSplited[2]}/${dateSplited[1]}/${dateSplited[0]}`;

  return (
    <DateContainer float={float} title={dateFormated}>
      <DateHat>{dateFormated}</DateHat>
    </DateContainer>
  );
};

Date.propTypes = {
  value: PropTypes.string.isRequired,
  float: PropTypes.bool
};

Date.defaultProps = {
  value: "0000-00-00",
  float: true
};

export default Date;
