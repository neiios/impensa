import styled from "styled-components";
import theme from "../../theme/Index";
import { Link } from "react-router-dom";
export const StyledButton = styled.button`
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

export const StyledOutlineButton = styled(StyledButton)`
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

export const StyledPrimaryOutlineButton = styled(StyledOutlineButton)`
  width: 100%;
  font-size: 20px !important;
  height: 45px;
  background: ${theme.bg.secondary};
  :hover {
    color: ${theme.text.grey};
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
