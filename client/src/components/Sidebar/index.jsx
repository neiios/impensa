import React, { useState } from "react";
import { SidebarWrapper, IconRow, MenuEl, SideSubWrapper } from "./style.jsx";
import styled from "styled-components";
import theme from "../../theme/Index.js";
import { StyledLink } from "../Button/style.jsx";
import { Button } from "../Button/index.jsx";

const LinkWrapper = styled(StyledLink)`
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
  :hover {
    background-color: ${theme.bg.semiBlue};
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

export const Sidebar = ({ logout }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <MenuIcon onClick={handleClick} className="fas fa-bars fa-sm" />
      <SidebarWrapper onclick={handleClick} click={click}>
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
export default Sidebar;
