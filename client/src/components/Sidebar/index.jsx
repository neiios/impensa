import React, { useState } from "react";
import { SidebarWrapper, IconRow, MenuEl, SideSubWrapper } from "./style.jsx";
import styled from "styled-components";
import theme from "../../theme/Index.js";
import { Button, MenuRef } from "../Button/index.jsx";
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

//  props="close" heading="Settings"  component="<Settings/>"/
export const Sidebar = ({ logout }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <MenuIcon onClick={handleClick} className="fas fa-bars fa-sm" />
      <SidebarWrapper onclick={handleClick} click={click}>
        <SideSubWrapper>
          <MenuEl>
            <MenuRef to="/dashboard/overview">
              <i className="fas fa-home"></i>
              <MenuSpan>Overview</MenuSpan>
            </MenuRef>
          </MenuEl>
          <MenuEl>
            <MenuRef to="/dashboard/expenses">
              <i className="fas fa-minus"></i>
              <MenuSpan>Expenses</MenuSpan>
            </MenuRef>
          </MenuEl>
          <MenuEl>
            <MenuRef to="/dashboard/archive">
              <i className="fas fa-archive"></i>
              <MenuSpan>Archive</MenuSpan>
            </MenuRef>
          </MenuEl>
          <MenuEl>
            <MenuRef to="/dashboard/settings">
              <i className="fas fa-cog"></i>
              <MenuSpan>Settings</MenuSpan>
            </MenuRef>
          </MenuEl>
          <IconRow>
            <MenuEl>
              <Button href="https://github.com/richard96292/impensa/discussions">
                Contact
              </Button>
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
export default Sidebar;
