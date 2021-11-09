import { MdMicNone } from "react-icons/md";
import styled from "styled-components";
import {H3} from "../../globalStyles"
import theme from "../../theme/Index";
export const Wrapper = styled.div`
height:100%;
`;

export const Form = styled.form`
  margin: 0 auto;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Input = styled.input` 
max-width:100%;
  margin-top:2px;
  padding: 11px 15px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 2rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid ${theme.text.grey};
  font-size: 14px;
  transition: all 0.3s ease-out;
`

export const Heading = styled(H3) `
font-size:1.5em;
color: ${theme.text.grey};
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
@media screen and (max-width:991px) {
    gap: ${props => (props.primary ? "5px": "31%")};
}
`;

export const InputWrapper = styled.div `
display:flex;
flex-direction:column;
width:370px;
@media screen and (max-width:991px) {
    width:100%;
}
`