import React from "react";
import Logo from "../../Logo/index";
import { Button } from "../../Button";
import { NavbarWrapper, NavMenu, NavbarContainer, NavItem } from "./styles.js";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <Logo />
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
