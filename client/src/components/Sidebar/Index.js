import React, { useState } from "react";
import {
  SidebarWrapper,
  Icon,
  IconRow,
  MenuEl,
  SideSubWrapper,
  menuLi,
} from "./Styles.js";
import styled from "styled-components";
import Logo from "../../components/Logo";
import theme from "../../theme/Index.js";
import { MenuRef } from "../Button/index.js";

const MenuIcon = styled.i`
  z-index: 1000;
  cursor: pointer;
  position: fixed;
  top: 19px;
  left: 80px;
  background-color: ${theme.bg.lightestBlue};
  padding: 9px;
  border-radius: 10px;
  margin-left: 100px;
  color: ${theme.bg.secondary};
  transition: background 0.2s;
  :hover {
    background: ${theme.bg.semiBlue};
    color: white;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const MenuSpan = styled.span`
  @media screen and (max-width: 800px) {
    display: none;
  }
`


export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <MenuIcon onClick={handleClick} className="fas fa-bars fa-sm" />
      <SidebarWrapper onclick={handleClick} click={click}>
        <SideSubWrapper>
          <MenuEl>
            <MenuRef to="/Interface">
            <i class="fas fa-home"></i>
            <MenuSpan>Overview</MenuSpan>
            </MenuRef>
          </MenuEl>
          <MenuEl>
            <MenuRef to="/home">
            <i class="fas fa-chart-line"></i>
              <MenuSpan>Progress</MenuSpan>
            </MenuRef>
          </MenuEl>
          <MenuEl>
            <MenuRef to="/home">
            <i class="far fa-chart-bar"></i>
              <MenuSpan>Analysis</MenuSpan>
            </MenuRef>
          </MenuEl>
          <MenuEl>
            <MenuRef to="/home">
            <i class="fas fa-archive"></i>
              <MenuSpan>Archive</MenuSpan>
            </MenuRef>
          </MenuEl>
          <IconRow>
            <MenuEl>
              <MenuRef to="/home">
              <i class="fas fa-sliders-h"></i>
                <MenuSpan>Settings</MenuSpan>
              </MenuRef>
            </MenuEl>
            <MenuEl>
              <MenuRef to="/home">
              <i class="fas fa-sign-out-alt"></i>
                <MenuSpan>Log out</MenuSpan>
              </MenuRef>
            </MenuEl>
          </IconRow>
        </SideSubWrapper>
      </SidebarWrapper>
    </>
  );
};

/*
            <Icon className="fas fa-home"> Overview</Icon>
            <Icon className="fas fa-chart-line"> Progress</Icon>
            <Icon className="fas fa-chart-area"> Analysis</Icon>
            <Icon className="fas fa-archive"> Archive</Icon>
            <Icon className="fas fa-cog"> Settings</Icon>
            <Icon className="fas fa-sign-out-alt"> Log out</Icon>

*/
export default Navbar;
