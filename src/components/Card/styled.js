import styled from "styled-components";
import { variablesColors, variablesFonts } from "~/theme/index";

const headerHeight = "80px";

export const CardContaienr = styled.article`
  display: flex;
  flex-direction: row;

  margin-bottom: 20px;
`;

export const CardImage = styled.img`
  width: 300px;
  height: 450px;
`;

export const CardContent = styled.div`
  width: 100%;
  background-color: ${variablesColors.gray};
  height: calc(450px - ${headerHeight});
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;

  background-color: ${variablesColors.blueDark};
  width: 100%;
  height: ${headerHeight};
  position: relative;
`;

export const CardHat = styled.h2`
  color: ${variablesColors.blueLight};
  font-family: ${variablesFonts.abel};
  font-size: 30px;
  width: 100%;
  position: relative;
  left: 15%;
`;
