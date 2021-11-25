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
            <Button to="/SignIn">Sign in</Button>{" "}
          </NavItem>
          <NavItem>
            <Button to="/SignUp">Sign up</Button>
          </NavItem>
          <NavItem>
            <Button to="/Interface">Demo</Button>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
