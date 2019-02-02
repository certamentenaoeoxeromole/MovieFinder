import React from "react";
import { DateContainer, DateHat } from "./styled.js";
const Date = ({ value }) => {
  var dateSplited = value.split("-");
  var dateFormated = `${dateSplited[2]}/${dateSplited[1]}/${dateSplited[0]}`;

  return (
    <DateContainer>
      <DateHat>{dateFormated}</DateHat>
    </DateContainer>
  );
};

export default Date;
