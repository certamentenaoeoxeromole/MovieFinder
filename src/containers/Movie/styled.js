import styled from "styled-components";
import { variablesColors } from "~/theme/index";

export const MovieHeader = styled.header`
  background-color: ${variablesColors.grayDark};
  width: 100%;
  height: 100px;
  padding: 0 40px;
  margin-top: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MovieHat = styled.h2`
  color: ${variablesColors.blueDark};
  font-size: 37px;
`;

export const MovieDescription = styled.p`
  color: ${variablesColors.sinopseTextColor};
  margin: 20px 0 40px 0;
  font-size: 23px;
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
`;
export const DataBlock = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-top: 20px;
  text-align: center;

  :not(:nth-child(1)) {
    margin-left: 30px;
  }

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
`;
export const DataItem = styled.div``;

export const Informations = styled.div`
  background-color: ${variablesColors.gray};
  width: calc(100% - 466.66px);
  height: 700px;
  padding: 40px;
  position: relative;

  display: inline-block;
`;

export const Banner = styled.img`
  height: 700px;
  float: left;
`;
