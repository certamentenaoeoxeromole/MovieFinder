import styled from "styled-components";
import { variablesColors } from "~/theme/index";

export const SearchInput = styled.input`
  width: 100%;
  border-radius: 15px;
  margin: 40px 0;
  border: none;
  background-color: ${variablesColors.gray};
  height: 50px;
  outline: none;
  font-size: 23px;
  color: ${variablesColors.blueDark};
  text-indent: 20px;

  &::placeholder {
    color: ${variablesColors.blueDark};
    opacity: 0.5;
    font-size: 15px;
  }
`;
