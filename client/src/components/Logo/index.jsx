import React from "react";
import { StyledLink } from "../Button/style.jsx";
import theme from "../../theme/Index.js";
import styled from "styled-components";

const LogoWrapper = styled(StyledLink)`
  display: flex;
  gap: 1px;
  align-items: center;
  justify-content: center;
  transition: color 0.3s;
`;

const Text = styled.span`
  font-size: 1.1em;
  color: ${theme.color.primary};
  font-weight: 600;
  &:hover {
    color: ${theme.color.lightPrimary};
  }
`;

const Logo = styled.img`
  width: 70px;
`;

export const LogoText = () => (
  <LogoWrapper to="/">
    <Text>Impensa</Text>
  </LogoWrapper>
);

export const LogoImg = () => (
  <LogoWrapper to="/">
    <Logo src="./../assets/images/logo.svg" />
  </LogoWrapper>
);
