import React from "react";
import { StyledLink } from "../Button/style.jsx";
import theme from "../../theme/Index.js";
import styled from "styled-components";
import { device } from "../../mediaQueries.jsx";
const LogoImg = styled.img`
  width: 30px;
`;

const LogoWrapper = styled(StyledLink)`
  display: flex;
  gap: 1px;
  align-items: center;
  justify-content: center;
  transition: color 0.3s;
`;

const LogoText = styled.span`
  color: ${theme.color.primary};
  font-weight: 550;
  &:hover {
    color: ${theme.color.lightPrimary};
  }
  @media ${device.mobileL} {
    visibility: hidden;
  }
`;

export const Logo = () => (
  <LogoWrapper to="/">
    <LogoImg src="../images/Impensa-logo.svg" />
    <LogoText>Impensa</LogoText>
  </LogoWrapper>
);

export default Logo;
