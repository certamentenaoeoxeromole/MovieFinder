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
