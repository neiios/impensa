import React from "react";
import { StyledLink } from "../Button/style.jsx";
import theme from "../../theme/Index.js";
import styled from "styled-components";

const LogoImg = styled.img`
  width: 30px;
`;

const LogoWrapper = styled(StyledLink)`
  display: flex;
  color: ${theme.color.primary};
  font-weight: 550;
  gap: 1px;
  align-items: center;
  justify-content: center;
  transition: color 0.3s;
  &:hover {
    color: ${theme.color.lightPrimary};
  }
`;

export const Logo = () => (
  <LogoWrapper to="/">
    <LogoImg src="../images/Impensa-logo.svg" /> Impensa
  </LogoWrapper>
);

export default Logo;
