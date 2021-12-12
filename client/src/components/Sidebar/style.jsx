import styled from "styled-components";
import theme from "../../theme/Index";
//import theme from "/theme/Index"

export const SidebarWrapper = styled.nav`
  z-index: 998;
  position: relative;
  left: 0;
  width: 270px;
  padding-top: 20px;
  transition: left 0.3s ease;
  display: ${({ click }) => (click ? "none" : "block")};
  @media screen and (max-width: 800px) {
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
  @media screen and (max-width: 800px) {
    width: 100%;
    background-color: white;
    position: fixed;
    height: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    gap: 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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
  @media screen and (max-width: 800px) {
    margin: auto;
    gap: 0;
    width: 50px;
    justify-content: center;
    :hover {
      background-color: ${theme.bg.lightestBlue};
    }
  }
`;

export const IconRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: 100px;
  gap: 5px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
