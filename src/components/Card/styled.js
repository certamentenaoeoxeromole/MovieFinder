import styled from "styled-components";
import { variablesColors, variablesFonts } from "~/theme/index";

const headerHeight = "80px";

export const LetContainer = styled.div`
  padding: 0 20px;
`;
export const CardContaienr = styled.article`
  cursor: pointer;
  display: flex;
  flex-direction: row;

  margin-bottom: 20px;
`;

export const CardImage = styled.img`
  width: 342px;
  height: 492px;
  overflow: unset;
  flex: 0 0 342px;
`;

export const CardContent = styled.div`
  width: 100%;
  background-color: ${variablesColors.gray};
  height: calc(492px - ${headerHeight});
`;

export const Sinopse = styled.div`
  font-size: 18px;
  color: ${variablesColors.sinopseTextColor};
  font-family: ${variablesFonts.lato};
  line-height: 1.2;
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: flex-end;

  background-color: ${variablesColors.blueDark};
  width: 100%;
  height: ${headerHeight};
  position: relative;
  padding-bottom: 10px;

  box-sizing: border-box;
`;

export const CardHat = styled.h2`
  color: ${variablesColors.blueLight};
  font-family: ${variablesFonts.abel};
  font-size: 30px;
  width: calc(100% -130px);
  position: relative;
  left: 130px;
`;
