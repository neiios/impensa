import styled from "styled-components";
import theme from "../../theme/Index";
import { Link, NavLink } from "react-router-dom";
import { device } from "../../mediaQueries";
export const StyledButton = styled.button`
  width: fit-content;
  min-width: 97px;
  font-weight: 550;
  border: thin solid ${theme.color.primary};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.5s;
  background-color: white;
  color: ${theme.color.primary};
  height: ${(props) => (props.primary ? "40px" : "32px")};
  font-size: ${(props) => (props.primary ? "1.2em" : ".95em")};
  :hover {
    background: ${theme.color.primary};
    color: white;
    background-size: 100%;
  }
  :active {
  }
`;

export const StyledOutlineButton = styled(StyledButton)`
  font-size: 25px !important;
  width: 155px;
  height: 70px;
  border: none;
  background-color: ${(props) =>
    props.primary ? theme.text.secondAlt : theme.color.primary};
  color: ${(props) => (props.primary ? theme.color.primary : "white")};
  transition: background-color 0.5s;
  :hover {
    background-color: ${(props) =>
      props.primary ? theme.color.primary : theme.color.lightestPrimary};
    color: ${(props) => (props.primary ? "white" : theme.color.primary)};
  }
`;

export const StyledPrimaryOutlineButton = styled(StyledOutlineButton)`
  width: 100%;
  font-size: 20px !important;
  height: 45px;
  background: ${theme.color.primary};
  :hover {
    color: ${theme.color.secondaryAlt};
  }
`;
export const A = styled.a`
  align-items: center;
  text-decoration: none !important;
`;

export const StyledLink = styled(Link)`
  align-items: center;
  color: #404040;
  text-decoration: none !important;
`;

export const StyledNavLink = styled(NavLink)`
  align-items: center;
  color: #404040;
  text-decoration: none !important;
`;
