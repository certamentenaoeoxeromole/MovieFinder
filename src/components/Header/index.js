import React from "react";
import { Link } from "react-router-dom";

import { HeaderContainer, HeaderHat } from "./styled";

const Header = () => (
  <HeaderContainer>
    <HeaderHat>
      <Link to="/">Movies</Link>
    </HeaderHat>
  </HeaderContainer>
);

export default Header;
