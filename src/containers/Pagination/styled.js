import styled from "styled-components";
import { variablesColors } from "~/theme/index";

export const PaginationContainer = styled.footer`
  display: flex;
  justify-content: center;
`;

export const PaginationItem = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  color: ${variablesColors.blueDark};
  cursor: pointer;
`;

export const PaginationActive = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  background-color: ${variablesColors.blueDark};
  border: 4px solid ${variablesColors.blueLight};
  color: ${variablesColors.blueLight};

  font-size: 20px;

  height: 50px;
  width: 50px;
`;
