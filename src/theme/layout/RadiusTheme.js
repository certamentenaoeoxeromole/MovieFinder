import styled from "styled-components";

import { variablesColors, variablesFonts } from "./variables";

export const RadiusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  background-color: ${variablesColors.blueDark};

  width: 70px;
  height: 70px;
  border: 7px solid ${variablesColors.blueLight};
`;

export const RadiusHat = styled.h4`
  color: ${variablesColors.blueLight};
  font-family: ${variablesFonts.abel};

  margin-left: 7px;
`;

export const RadiusSingle = styled(RadiusContainer)`
  position: absolute;
  right: 0;
  top: 48%;
  margin-right: 30px;
  margin-bottom: 30px;
  width: 120px;
  height: 120px;
  border: 7px solid ${variablesColors.blueLight};
  box-shadow: 0px 0px 0px 6px ${variablesColors.blueDark};
  font-size: 33px;
`;

export const RadiusMoviesList = styled(RadiusContainer)`
  border: 4px solid ${variablesColors.blueLight};
  position: absolute;
  left: 30px;
  bottom: 0;
  transform: translateY(50%);
  font-size: 24px;
`;

export const RadiusPagination = styled(RadiusContainer)`
  height: 50px;
  width: 50px;
  border-width: 3px;
  h4 {
    margin-left: 0;
  }
`;
