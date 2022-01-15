import styled from "styled-components";
import theme from "../../theme/Index";
import { device } from "../../mediaQueries";
//import theme from "/theme/Index"

export const SidebarWrapper = styled.nav`
  z-index: 998;
  position: relative;
  left: 0;
  width: 270px;
  padding-top: 20px;
  transition: left 0.3s ease;
  display: ${({ click }) => (click ? "none" : "block")};

  @media ${device.laptop} {
    display: none;
    display: ${({ click }) => (click ? "block" : "none")};
  }
  @media ${device.laptop} {
    display: block;
    width: 0;
  }
`;
export const SideSubWrapper = styled.div`
  margin-top: 70px;
  height: 100vh;
  position: fixed;
  width: 270px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
    background-color: RGBA(71, 69, 84, 0.8);
    border-radius: 50px;
    position: fixed;
    height: 50px;
    bottom: 25px;
    left: 50px;
    right: 50px;
    gap: 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
`;
export const StyledLi = styled.a``;

export const Icon = styled.img`
  width: 15px;
`;

export const MenuEl = styled.div`
  display: flex;
  gap: 20px;
  height: 45px;
  width: 160px;
  align-items: center;
  justify-content: flex-start;
  border-radius: 15px;
  transition: color 0.2s;
  :hover {
    color: ${theme.bg.secondary};
  }
  :active {
    color: ${theme.bg.semiBlue};
  }
  @media ${device.laptop} {
    margin: auto;
    gap: 0;
    width: 30px;
    height: 30px;
    justify-content: center;
    :hover {
      background-color: RGBA(71, 69, 84, 0.2);
    }
  }
`;

export const IconRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: 100px;
  gap: 5px;
  @media ${device.laptop} {
    display: none;
  }
`;

//profile pic container
export const PpContainer = styled.div``;

export const PpCircle = styled.div`
  background: ${theme.bg.secondary};
`;

export const NameFirstLetter = styled.div``;
