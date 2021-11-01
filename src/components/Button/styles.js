import styled from 'styled-components';
import theme from "../../theme/Index"
import { Link } from 'react-router-dom';
export const StyledButton = styled.button `
// primary prop
font-size: 15px;
width: 97px;
height: 32px;
font-weight: 550;
color: #0A2540;;
border: thin solid #0A2540;
border-radius: 5px;
cursor: pointer;
transition: background-color .5s;
background-color: white;
color: #0A2540;
:hover{
background: #0A2540;
color:white;
}
:active {
    opacity:1;
}
`

export const StyledButtonBig = styled(StyledButton) `
font-size: 25px !important;
width: 155px;

height: 70px;
border: none;
background-color: ${props => (props.primary ? '#F6F9FC' : ' #0A2540')};
color: ${props => (props.primary ? ' #0A2540' : 'white')};
transition: background-color .5s;
:hover{
background-color: ${props => (props.primary ? ' #0A2540' : '#F6F9FC')};
color: ${props => (props.primary ? ' #F6F9FC' : '#0A2540')};
}
`

export const A = styled.a`
  align-items: center;
`;

export const StyledLink = styled(Link)`
  align-items: center;
`;