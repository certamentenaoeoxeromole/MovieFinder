import React from "react";
import { RadiusContainer, RadiusHat } from "./styled";

const Radius = ({ value, single }) => (
  <RadiusContainer single={single}>
    <RadiusHat>{Math.round(value)}%</RadiusHat>
  </RadiusContainer>
);

export default Radius;
