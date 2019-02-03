import React from "react";
import { RadiusContainer, RadiusHat } from "./styled";

const Radius = ({ value, single, pagination }) => (
  <RadiusContainer
    single={single}
    pagination={pagination}
    title={Math.round(value)}
  >
    <RadiusHat>{Math.round(value)}%</RadiusHat>
  </RadiusContainer>
);

export default Radius;
