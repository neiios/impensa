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

export const NotificationHub = styled.div`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  position: absolute;
  z-index: 1000;
  right: 20px;
  top: 70px;
  gap: 20px;
  max-width: 270px;
  width: 100%;
  max-height: 500px;
  overflow-y: auto;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
`;

export const Notification = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  align-content: center;
  padding: 15px;
  gap: 2px;
  border-radius: 20px;
  background: ${theme.color.lightestPrimary};
`;

export const NotificationTitle = styled.span`
  font-weight: 550;
  font-size: 1rem;
  padding: 0;
  margin: 0;
`;

export const NotificationDescription = styled.p`
  padding: 0;
  margin: 0;
  max-width: 90%;
`;

export const SectionHeading = styled.h4`
  margin: 0;
`;

export const WarningMsg = styled.span`
  font-size: 0.8rem;
`;

export const NotificationControls = styled.div`
  display: flex;
  gap: 10px;
`;

export const Control = styled.span`
  cursor: pointer;
  text-decoration: underline;
  font-size: 0.5rem;
  transition: opacity 0.15s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
`;

export const Date = styled.span`
  font-size: 0.5rem;
`;

export const Envelope = styled.div`
  position: relative;
`;

export const NotificationCount = styled.span`
  position: absolute;
  top: -7px;
  right: -7px;
  padding: 1px;
  border-radius: 100%;
  background-color: #ff8d6f;
  color: white;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 0.8rem;
  width: 17px;
  height: 17px;
`;
