import React from "react";
import { DateContainer, DateHat } from "./styled.js";
import PropTypes from "prop-types";

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
  value: PropTypes.array.isRequired,
  float: PropTypes.bool
};

Date.defaultProps = {
  value: "0000-00-00",
  float: true
};

export default Date;
