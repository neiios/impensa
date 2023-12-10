import React, { useState } from "react";
import { SidebarWrapper, IconRow, MenuEl, SideSubWrapper } from "./style.jsx";
import styled from "styled-components";
import theme from "../../theme/Index.js";
import { StyledNavLink } from "../Button/style.jsx";
import { Button } from "../Button/index.jsx";
import { device } from "../../mediaQueries.jsx";
export const LinkWrapper = styled(StyledNavLink)`
  color: ${(props) => (props.primary ? theme.color.primary : null)};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: color 0.3s;
  &:hover {
    color: ${theme.bg.secondary};
  }
  &:active {
    color: ${theme.bg.semiBlue};
  }
  &.active {
    color: ${theme.bg.secondary};
  }
  -webkit-tap-highlight-color: transparent;

  @media ${device.laptop} {
    border-radius: 100%;
    margin: auto;
    gap: 0;
    width: 30px;
    height: 30px;
    justify-content: center;
    color: rgb(209, 205, 205);
    &.active {
      color: white;
    }
    &:hover {
      color: white;
      background-color: RGBA(71, 69, 84, 0.2);
    }
  }
`;

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
  transition: background-color 0.2s;
  &:hover {
    background-color: ${theme.bg.semiBlue};
    color: white;
  }
  @media ${device.laptop} {
    display: none;
  }
`;

export const MenuSpan = styled.span`
  @media ${device.laptop} {
    display: none;
  }
`;

export const Sidebar = ({ logout }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <MenuIcon onClick={handleClick} className="fas fa-bars fa-xm" />
      <SidebarWrapper $click={click}>
        <SideSubWrapper>
          <MenuEl>
            <LinkWrapper to="/dashboard/overview">
              <i className="fas fa-home"></i>
              <MenuSpan>Overview</MenuSpan>
            </LinkWrapper>
          </MenuEl>
          <MenuEl>
            <LinkWrapper to="/dashboard/expenses">
              <i className="fas fa-minus"></i>
              <MenuSpan>Expenses</MenuSpan>
            </LinkWrapper>
          </MenuEl>
          <MenuEl>
            <LinkWrapper to="/dashboard/archive">
              <i className="fas fa-archive"></i>
              <MenuSpan>Archive</MenuSpan>
            </LinkWrapper>
          </MenuEl>
          <MenuEl>
            <LinkWrapper to="/dashboard/settings">
              <i className="fas fa-cog"></i>
              <MenuSpan>Settings</MenuSpan>
            </LinkWrapper>
          </MenuEl>
          <IconRow>
            <MenuEl>
              <Button to="/dashboard/contact">Contact</Button>
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
export default Sidebar;
