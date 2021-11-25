import styled from "styled-components";
import theme from "../../theme/Index";
//import theme from "/theme/Index"

export const SidebarWrapper = styled.nav`
  top: 50px;
  height: 100vh;
  position: fixed;
  left: 0;
  width: 270px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
  left: 0;
  right: 0;
`;

export const StyledLi = styled.a``;

export const Icon = styled.img`
  width: 15px;
  :hover {
  }
`;

export const MenuEl = styled.div`
  margin-left: 29px;
  display: flex;
  gap: 20px;
  height: 45px;
  width: 160px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  transition: background-color 0.3s;
  :hover {
    background-color: ${theme.bg.semiBlue};
  }
  :active {
    background-color: ${theme.bg.semiBlue};
  }
`;

export const IconRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: auto;
  margin-bottom: 100px;
`;
