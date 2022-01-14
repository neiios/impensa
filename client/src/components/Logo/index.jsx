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

const LogoText = styled.span`
  font-size: 1.1em;
  color: ${theme.color.primary};
  font-weight: 600;
  &:hover {
    color: ${theme.color.lightPrimary};
  }
`;

export const Logo = () => (
  <LogoWrapper to="/">
    <LogoText>Impensa</LogoText>
  </LogoWrapper>
);

export default Logo;
