import React, { useState } from "react";
import { ModifiedLink } from "../Button/index.js";
import { SidebarWrapper, Icon, IconRow, MenuEl } from "./Styles.js";
import styled from "styled-components";
import Logo from "../../components/Logo";
import theme from "../../theme/Index.js";

export const UserCreds = styled.div`
  color: ${theme.bg.secondary};
  cursor: pointer;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.bg.lightestBlue};
  padding: 5px;
  border-radius: 15px;
  transition: background-color 0.2s;
  :hover {
    background-color: ${theme.bg.semiBlue};
    color: white !important;
  }
`;

export const UserImg = styled.img`
  border-radius: 50%;
  image-resolution: 300dpi;
  width: 25px;
  height: 25px;
  :hover {
  }
`;
export const NavbarWrapper = styled.nav`
  z-index: 999;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  background-color: #ffffff;
`;

export const NavMenu = styled.div`
  padding: 0 5px 0 0;
  margin: 0;
  gap: 20px;
  list-style: none;
  display: flex;
  margin-left: auto;
`;
export const NavbarContainer = styled.div`
  height: 70px;
  padding-right: 20px;
  padding-left: 29px;
  display: flex;
  align-items: center;
  width: 100vw;
`;
export const UserName = styled.span`
  font-weight: 700;
  font-size: 0.7em;
`;

export const Nav = () => {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <Logo />
        <NavMenu>
          <UserCreds>
            <UserName>Sahid23</UserName>
            <UserImg src="images/max.png" />
            <i class="fas fa-angle-right fa-sm"></i>
          </UserCreds>
        </NavMenu>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Nav;
