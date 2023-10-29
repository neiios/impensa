import styled, { keyframes } from "styled-components";
import { device } from "../../../mediaQueries";
import theme from "../../../theme/Index";

export const Icon = styled.div`
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background: ${theme.color.lightestPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s;
  &:hover {
    color: ${theme.color.primary};
  }
  &:active {
    color: ${theme.color.lightPrimary};
  }
`;

export const PpCircle = styled.div`
  background: ${theme.bg.secondary};
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NameFirstLetter = styled.div`
  font-size: 0.8em;
  color: white;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  text-align: left;
`;

export const UserCreds = styled.div`
  color: #404040;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.bg.lightestBlue};
  padding: 7px;
  border-radius: 15px;
`;

export const UserImg = styled.div`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  &:hover {
  }
`;
export const NavbarWrapper = styled.nav`
  z-index: 999;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  background-color: #ffffff;
`;

export const NavMenu = styled.div`
  padding: 0 5px 0 0;
  margin: 0;
  gap: 20px;
  list-style: none;
  display: flex;
  align-items: center;
  margin-left: auto;
`;
export const NavbarContainer = styled.div`
  height: 70px;
  padding-right: 20px;
  padding-left: 29px;
  display: flex;
  align-items: center;
  width: 100vw;
`;
export const UserName = styled.span`
  font-weight: 700;
  font-size: 0.7em;
`;

const animationName = keyframes`
  0% { transform: translateX(0px);}
  50% { transform: translateX(8px);}
  100% {transform: translateX(0px); }
`;
export const Span = styled.span`
  font-size: 0.8em;
  @media ${device.mobileL} {
    display: none;
  }
`;

export const ArrowIcon = styled.i`
  animation: ${animationName} 1s 0s infinite;
`;

export const PpContainer = styled.div``;
