import { MdMicNone } from "react-icons/md";
import styled from "styled-components";
import {H3} from "../../globalStyles"
import theme from "../../theme/Index";
export const Wrapper = styled.div`
height:100%;
display:flex;
align-items:center;
justify-content:center;
margin-top:10%;
`;

export const Form = styled.form`
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
height:400px;
width:370px;
max-width:100%;
border-radius:20px;
  margin: 0 auto;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content:center;
  @media screen and (max-width:400px) {
  width:100%;
  }
`;

export const Input = styled.input` 
max-width:100%;
  margin-top:10px;
  padding: 11px 15px;
  background: #f9f9fa;
  margin-bottom: 2rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(3, 102, 214, 0.1);
  font-size: 14px;
  transition: all 0.3s ease-out;
  :focus {
    box-shadow: ${theme.bg.semiBlue} 0px 0px 0px 3px;
  }
`

export const Heading = styled(H3) `
font-size:1.2em;
color: ${theme.text.grey};
margin:auto;
`

export const InputLabel = styled.label`
  color: ${theme.text.grey};
  background: #ffffff;
  font-size: .8em;
  font-weight:600;
  letter-spacing:.03em;
`;

export const StringContainer = styled.div`
font-size: .8em !important; 
display:flex;
padding-top: ${props => (props.primary ? "20px": "0")};
gap: ${props => (props.primary ? "5px": "50%")};
margin: ${props => (props.primary ? "auto": "none")};
@media screen and (max-width:400px) {
  gap: ${props => (props.primary ? "5px": "27px")};
  }
`;

export const InputWrapper = styled.div `
display:flex;
flex-direction:column;
max-width:100%;
`

export const Span = styled.span `
font-size:.5em;
font-weight:700;
`

export const Hr = styled.hr `
opacity:.2;
width:70px;
border: none;
height: .5px;
background-color:black;
margin:10px;
`

export const TextContainer = styled.div `
display:flex;
justify-content:center;
align-items:center;
margin-top:20px;
margin-bottom:20px;
`