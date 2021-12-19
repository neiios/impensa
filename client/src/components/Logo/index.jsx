import React from "react";
import { StyledLink } from "../Button/style.jsx";
import styled from "styled-components";

const LogoImg = styled.img`
  width: 30px;
`;

const LogoWrapper = styled(StyledLink)`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const Logo = () => (
  <LogoWrapper to="/">
    <LogoImg src="../images/Impensa-logo.svg" /> Impensa
  </LogoWrapper>
);

export default Logo;
