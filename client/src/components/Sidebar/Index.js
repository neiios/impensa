import React, { useState } from "react";
import { SidebarWrapper, IconRow, MenuEl, SideSubWrapper } from "./Styles.js";
import styled from "styled-components";
import theme from "../../theme/Index.js";
import { Button, MenuRef } from "../Button/index.js";
import TestModal from "../Modal/TestModal.js";
import ModalService from "../Modal/ModalService.js";
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
`;

export const Navbar = ({ logout }) => {
  const addModal = () => {
    ModalService.open(TestModal);
  };
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <MenuIcon onClick={handleClick} className="fas fa-bars fa-sm" />
      <SidebarWrapper onclick={handleClick} click={click}>
        <SideSubWrapper>
          <MenuEl>
            <MenuRef to="/Interface">
              <i className="fas fa-home"></i>
              <MenuSpan>Overview</MenuSpan>
            </MenuRef>
          </MenuEl>
          <MenuEl>
            <MenuRef to="/home">
              <i className="fas fa-chart-line"></i>
              <MenuSpan>Progress</MenuSpan>
            </MenuRef>
          </MenuEl>
          <MenuEl>
            <MenuRef to="/home">
              <i className="far fa-chart-bar"></i>
              <MenuSpan>Analysis</MenuSpan>
            </MenuRef>
          </MenuEl>
          <MenuEl>
            <MenuRef to="/home">
              <i className="fas fa-archive"></i>
              <MenuSpan>Archive</MenuSpan>
            </MenuRef>
          </MenuEl>
          <IconRow>
            <MenuEl>
              <Button onClick={ addModal }>Settings</Button>
            </MenuEl>
            <MenuEl>
              <Button onClick={(e) => logout(e)}>Log out</Button>
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
