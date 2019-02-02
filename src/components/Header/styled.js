import styled from "styled-components";
import { variablesColors, variablesFonts } from "~/theme/index";

export const HeaderContainer = styled.header`
  background-color: ${variablesColors.backgroundHeader};
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const HeaderHat = styled.h1`
  font-size: 40px;
  color: ${variablesColors.blueLight};
  font-family: ${variablesFonts.abel};
`;
