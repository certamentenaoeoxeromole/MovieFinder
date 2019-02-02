import styled from "styled-components";
import { variablesColors, variablesFonts } from "~/theme/index";

export const DateContainer = styled.div`
  width: calc(100% - 130px);
  position: relative;
  left: 130px;
  height: 60px;
  padding-top: 10px;
`;

export const DateHat = styled.h6`
  color: ${variablesColors.dateTextColor};
  font-family: ${variablesFonts.abel};
  font-size: 20px;
`;
