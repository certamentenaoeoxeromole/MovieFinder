import styled from "styled-components";
import { variablesColors, media } from "~/theme/index";

export const MovieHeader = styled.header`
  background-color: ${variablesColors.grayDark};
  width: 100%;
  padding: 10px 40px;
  margin-top: 30px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  @media (min-width: ${media.screenMdMin}) {
    height: 100px;
    flex-direction: row;
    align-items: center;
  }
`;

export const MovieHat = styled.h2`
  color: ${variablesColors.blueDark};
  font-size: 37px;
  margin-bottom: 10px;
`;

export const MovieDescription = styled.p`
  color: ${variablesColors.sinopseTextColor};
  margin: 20px 0 40px 0;
  font-size: 18px;
`;

export const MovieTitle = styled.h2`
  font-size: 25px;
  color: ${variablesColors.blueDark};
  display: block;
  width: 100%;
  border-bottom: 2px solid ${variablesColors.blueLight};
  padding-bottom: 10px;
`;
export const MovieContainer = styled.section``;

export const MovieContent = styled.article`
  display: flex;
  flex-direction: column;
  @media (min-width: ${media.screeenLgMin}) {
    flex-direction: row;
  }
`;
export const DataBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  > div {
    &:nth-child(1) {
      color: ${variablesColors.blueDark};
      font-size: 19px;
    }
    &:nth-child(2) {
      color: ${variablesColors.sinopseTextColor};
      margin-top: 5px;
    }
  }

  @media (min-width: ${media.screeenLgMin}) {
    display: inline-flex;
    flex-direction: column;
    text-align: center;

    :not(:nth-child(1)) {
      margin-left: 30px;
    }
  }
`;
export const DataItem = styled.div``;

export const Informations = styled.div`
  background-color: ${variablesColors.gray};
  width: 100%;
  padding: 20px;
  position: relative;

  display: inline-block;
  order: 2;
  @media (min-width: ${media.screeenLgMin}) {
    width: calc(100% - 466.66px);
    height: 700px;
    padding: 40px;
    order: unset;
  }
`;

export const Banner = styled.img`
  float: left;
  width: 100%;
  order: 1;
  @media (min-width: ${media.screeenLgMin}) {
    height: 700px;
  }
`;

export const TrailerButton = styled.button`
  margin-top: 30px;
  padding: 8px;
  background-color: unset;
  border: 1px solid ${variablesColors.blueDark};
  color: ${variablesColors.blueDark};
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
`;
