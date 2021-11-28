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

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <MenuIcon onClick={handleClick} className="fas fa-bars fa-sm" />
      <SidebarWrapper onclick={handleClick} click={click}>
        <SideSubWrapper>
          <MenuEl>
            <i class="fas fa-home"></i>
            <MenuRef to="/Interface">Overview</MenuRef>
          </MenuEl>
          <MenuEl>
            <i class="fas fa-chart-line"></i>
            <MenuRef to="/home">Progress</MenuRef>
          </MenuEl>
          <MenuEl>
            <i class="far fa-chart-bar"></i>
            <MenuRef to="/home">Analysis</MenuRef>
          </MenuEl>
          <MenuEl>
            {" "}
            <i class="fas fa-archive"></i>
            <MenuRef to="/home">Archive</MenuRef>
          </MenuEl>
          <IconRow>
            <MenuEl>
              <i class="fas fa-sliders-h"></i>
              <MenuRef to="/home">Settings</MenuRef>
            </MenuEl>
            <MenuEl>
              <i class="fas fa-sign-out-alt"></i>
              <MenuRef to="/home">Log out</MenuRef>
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
