import styled from "styled-components";

import { media } from "./variables";

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: ${media.screenMdMin}) {
    width: 740px;
  }
  @media (min-width: ${media.screeenLgMin}) {
    width: 960px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

export default Container;
