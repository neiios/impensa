import styled from 'styled-components';
import theme from "../../theme/Index"

export const StyledButton = styled.button `
// primary prop
font-size: ${props => (props.primary ? '15px' : '20px')};
width: ${props => (props.primary ? '97px' : '150px')};
height: ${props => (props.primary ? '32px' : '50px')};
font-weight: 550;
color: #0A2540;;
border: thin solid #0A2540;
border-radius: 20px;
cursor: pointer;
transition: opacity 0.5s;
background-color: white;
:hover{
opacity:0.5;
}
:active {
    opacity:1;
}
`
