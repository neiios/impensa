import React from "react";
import { LogoText } from "../../Logo/index.jsx";
import { Button } from "../../Button/index.jsx";
import { NavbarWrapper, NavMenu, NavbarContainer, NavItem } from "./style.jsx";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <LogoText />
        <NavMenu>
          <NavItem>
            <Button to="/signin">Sign in</Button>
          </NavItem>
          <NavItem>
            <Button to="/signup">Sign up</Button>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
