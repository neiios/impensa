import styled from 'styled-components';
import theme from "../../theme/Index"
import { Link } from 'react-router-dom';
export const StyledButton = styled.button `
// primary prop
font-size: 15px;
width: 97px;
height: 32px;
font-weight: 550;
border: thin solid ${theme.text.secondary};
border-radius: 5px;
cursor: pointer;
transition: background-color .5s;
background-color: white;
color: ${theme.text.secondary};
:hover{
background: ${theme.text.secondary};
color:white;
}
:active {
}
`

export const StyledButtonBig = styled(StyledButton) `
font-size: 25px !important;
width: 155px;

height: 70px;
border: none;
background-color: ${props => (props.primary ? theme.text.secondAlt : theme.text.secondary)};
color: ${props => (props.primary ? theme.text.secondary: 'white')};
transition: background-color .5s;
:hover{
background-color: ${props => (props.primary ? theme.text.secondary: theme.text.secondAlt)};
color: ${props => (props.primary ? theme.text.secondAlt : theme.text.secondary)};
}
`


export const A = styled.a`
  align-items: center;
`;

export const StyledLink = styled(Link)`
  align-items: center;
  text-decoration: none;
`;

export const LinkContainer = styled.div `
color: ${theme.text.secondary};
`