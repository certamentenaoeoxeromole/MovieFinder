import React from "react";
import { HeaderContainer, HeaderHat } from "./styled";
import { Link } from "react-router-dom";

const Header = () => (
  <HeaderContainer>
    <HeaderHat>
      <Link to="/">Movies</Link>
    </HeaderHat>
  </HeaderContainer>
);

export default Header;
