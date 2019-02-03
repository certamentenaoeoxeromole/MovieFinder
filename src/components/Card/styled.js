import styled from "styled-components";
import { variablesColors, variablesFonts, media } from "~/theme/index";

const headerHeight = "80px";

export const LetContainer = styled.div`
  padding: 0 20px;
`;
export const CardContaienr = styled.article`
  flex-direction: column;
  cursor: pointer;
  display: flex;

  @media (min-width: ${media.screenSmMin}) {
    flex-direction: row;
  }
  margin-bottom: 20px;
`;

export const CardImage = styled.img`
  width: 100%;
  overflow: unset;
  flex: 0 0 342px;

  @media (min-width: ${media.screenSmMin}) {
    width: 342px;
    height: 492px;
  }
`;

export const CardContent = styled.div`
  width: 100%;
  background-color: ${variablesColors.gray};
  padding-bottom: 20px;

  @media (min-width: ${media.screenSmMin}) {
    height: calc(492px - ${headerHeight});
  }
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

  position: relative;
  margin-top: -3px;
  padding: 20px 0;
  box-sizing: border-box;

  @media (min-width: ${media.screenSmMin}) {
    height: ${headerHeight};
    padding-bottom: 10px;
    padding-top: 0px;
    margin-top: 0;
  }
`;

export const CardHat = styled.h2`
  color: ${variablesColors.blueLight};
  font-family: ${variablesFonts.abel};
  font-size: 30px;
  width: calc(100% - 130px);
  position: relative;
  left: 130px;
`;
