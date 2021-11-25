import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/Sidebar/Styles.js";
import Logo from "../../components/Logo";

export const UserName = styled.h4``;
export const UserCreds = styled.div`
display:flex;
gap:5px;
justify-content:center;
align-items:center;
}
`;

export const ArrowIcon = styled(Icon)`
  width: 15px;
  height: 15px;
  margin-left: 0px;
  position: relative;
  top: 0;
  transition: top ease 0.1s;
  :hover {
    top: -1px;
  }
`;

export const UserImg = styled.img`
  border-radius: 50%;
  image-resolution: 300dpi;
  width: 40px;
  height: 40px;
`;
export const NavbarWrapper = styled.nav`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  background-color: #ffffff;
  justify-content: center;
  z-index: 999;
`;

export const NavMenu = styled.div`
  padding: 0 10px 0 0;
  margin: 0;
  gap: 20px;
  list-style: none;
  display: flex;
  margin-left: auto;
`;
export const NavbarContainer = styled.div`
  height: 70px;
  padding-right: 20px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  width: 100vw;
`;

const userName = "Cockstar";

const UserID = () => {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <Logo />
        <NavMenu>
          <UserCreds>
            <UserName>{userName}</UserName>
            <ArrowIcon src="images/icons/down-arrow.png" />
            <UserImg src="images/max.png" />
          </UserCreds>
        </NavMenu>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default UserID;
