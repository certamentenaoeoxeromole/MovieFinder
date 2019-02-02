import React from "react";
import { RadiusContainer, RadiusHat } from "./styled";

const Radius = ({ value }) => (
  <RadiusContainer>
    <RadiusHat>{Math.round(value)}%</RadiusHat>
  </RadiusContainer>
);

export default Radius;
