import styled from "styled-components";
import theme from "../../theme/Index";
import { Link } from "react-router-dom";
export const StyledButton = styled.button`
  // primary prop
  width: fit-content;
  font-size: 15px;
  min-width: 97px;
  height: 32px;
  font-weight: 550;
  border: thin solid ${theme.text.secondary};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.5s;
  background-color: white;
  color: ${theme.text.secondary};
  :hover {
    background: ${theme.text.secondary};
    color: white;
    background-size: 100%;
  }
  :active {
  }
`;

export const StyledButtonBig = styled(StyledButton)`
  font-size: 25px !important;
  width: 155px;

  height: 70px;
  border: none;
  background-color: ${(props) =>
    props.primary ? theme.text.secondAlt : theme.text.secondary};
  color: ${(props) => (props.primary ? theme.text.secondary : "white")};
  transition: background-color 0.5s;
  :hover {
    background-color: ${(props) =>
      props.primary ? theme.text.secondary : theme.bg.lightestBlue};
    color: ${(props) =>
      props.primary ? theme.bg.default : theme.bg.secondary};
  }
`;

export const WideBtn = styled(StyledButtonBig)`
  width: 100%;
  font-size: 20px !important;
  height: 45px;
  background: ${theme.bg.secondary};
  :hover {
    color: ${theme.text.grey};
  }
`;

export const SpentButton = styled(StyledButton)`
  width: 200px;
  font-size: 20px !important;
  height: 45px;
`;

export const SmallBtn = styled(WideBtn)`
  padding: 1 5 1 5;
  border-radius: 10px;
  border: thin solid black;
  width: fit-content;
  height: fit-content;
  font-size: 1em !important;
`;

export const FitBtn = styled(StyledButton)`
  background-color: ${(props) =>
    props.primary ? theme.bg.secondAlt : theme.bg.secondary};
  color: ${(props) => (props.primary ? theme.bg.secondary : "white")};
  width: fit-content;
  height: fit-content;
  padding: 5px;
  border-radius: 10px;
  width: fit-content;
  height: fit-content;
  font-size: 2em !important;
`;

export const A = styled.a`
  align-items: center;
  text-decoration: none !important;
`;

export const StyledLink = styled(Link)`
  align-items: center;
  text-decoration: none !important;
`;

export const LinkContainer = styled.div`
  color: ${theme.text.secondary};
  display: flex;
  gap: 5px;
  align-items: center;
  transition: color 0.4s;
  :hover {
    color: ${theme.bg.secondary} !important;
  }
`;

export const MenuLinks = styled(LinkContainer)`
  display: flex;
  gap: 12px;
  color: #404040;
`;
