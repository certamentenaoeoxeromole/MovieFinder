import styled from "styled-components";
import { variablesColors, variablesFonts } from "~/theme/index";

export const RadiusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  background-color: ${variablesColors.blueDark};

  ${({ single }) =>
    !single
      ? `
    width: 70px;
    height: 70px;
    position: absolute;
    left: 30px;
    bottom: 0;
    transform: translateY(50%);
    border: 4px solid ${variablesColors.blueLight};
    font-size: 24px;
  `
      : `
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 30px;
  margin-bottom: 30px;
  width: 120px;
  height: 120px;
  border: 7px solid ${variablesColors.blueLight};
  box-shadow: 0px 0px 0px 6px ${variablesColors.blueDark};
  font-size: 37px;

  
  `}

  ${({ pagination }) =>
    pagination
      ? `
    width: 30px;
    height: 30px;
    box-shadow: 0px 0px 0px 2px ${variablesColors.blueDark};
  `
      : null}
`;

export const RadiusHat = styled.h4`
  color: ${variablesColors.blueLight};
  font-family: ${variablesFonts.abel};

  margin-left: 7px;
`;
