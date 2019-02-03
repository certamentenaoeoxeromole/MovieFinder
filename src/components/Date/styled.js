import styled, { css } from "styled-components";
import { variablesColors, variablesFonts } from "~/theme/index";

export const DateContainer = styled.div`
  ${({ float }) =>
    float
      ? `
  width: calc(100% - 130px);
  position: relative;
  left: 130px;
  height: 60px;
  padding-top: 10px; 
  `
      : `font-size: 100px`}
`;

export const DateHat = styled.h6`
  color: ${variablesColors.defaultDateColor};
  font-family: ${variablesFonts.abel};
  font-size: 20px;
`;
