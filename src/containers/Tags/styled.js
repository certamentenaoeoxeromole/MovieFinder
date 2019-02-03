import styled from "styled-components";
import { variablesColors } from "~/theme/index";

export const TagsContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  border: 1px solid ${variablesColors.blueDark};
  height: 30px;
  padding: 6px;
  margin-top: 20px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:nth-child(n + 2) {
    margin-left: 10px;
  }
`;

export const TagsHat = styled.div`
  color: ${variablesColors.blueDark};
`;
