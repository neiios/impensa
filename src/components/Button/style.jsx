import styled from "styled-components";
import theme from "../../theme/Index";
import { Link, NavLink } from "react-router-dom";
export const StyledButton = styled.button`
  width: fit-content;
  min-width: 97px;
  font-weight: 550;
  border: thin solid ${theme.color.primary};
  border-radius: 3px;
  cursor: pointer;
  transition: opacity 0.5s;
  background-color: ${theme.color.primary};
  color: white;
  height: ${(props) => (props.primary ? "40px" : "32px")};
  font-size: ${(props) => (props.primary ? "1em" : ".95em")};
  :hover {
    opacity: 0.8;
  }
  :active {
    opacity: 0.6;
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
  &:active {
    color: ${theme.bg.secondary};
  }
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
