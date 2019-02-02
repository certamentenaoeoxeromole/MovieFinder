import styled from "styled-components";
import { variablesColors, variablesFonts } from "~/theme/index";

export const RadiusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  border: 4px solid ${variablesColors.blueLight};
  width: 70px;
  height: 70px;
  background-color: ${variablesColors.blueDark};
  position: absolute;
  left: 30px;
  bottom: 0;

  transform: translateY(50%);
`;

export const RadiusHat = styled.h4`
  color: ${variablesColors.blueLight};
  font-family: ${variablesFonts.abel};
  font-size: 24px;
  margin-left: 7px;
`;
