import styled from "styled-components";
import theme from "../../../theme/Index";
/*
        Settings 
|   Inputs  |    PP   |
|           |         |
|           |         |
|           |         |
*/

export const Input = styled.input`
margin-left:120px;
padding:5px;
position:absolute;
width:200px;
height:20px;
  border-radius: 4px;
  outline: 0;
  border: ${({ click }) => (click ? "1px solid transparent" : "1px solid rgba(3, 102, 214, 0.1)")};
  font-size: 14px;
  transition: all 0.3s ease-out;
  :focus {
    box-shadow: ${theme.bg.semiBlue} 0px 0px 0px 2px;
  }
`

export const Wrapper = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
`;

export const Container = styled.div`
width:100%;
height:100%;
display:flex;
gap:100px;
padding-left:20px;
padding-right:20px;
`;

export const Heading = styled.h2`
margin:0;
`;


export const InputSection = styled.div`
gap:25px;
display:flex;
flex-direction: column;
`;

export const InputContainer = styled.div`
display:flex;
align-items: center;
`;

export const ProfilePicture = styled.img`
border-radius:50%;
width:220px;
height:220px;
border: thin dashed transparent;
:hover {
border: thin dashed black;
}
`;

export const PictureContainer = styled.div `
margin-top:27px;
display:flex;
flex-direction:column;
gap:20px;
align-items:center;
margin-left:auto;
`

export const OnPictureContainer = styled.div `
position:absolute;
top:200px;
`

export const Label = styled.label`
font-size:.8em;
font-weight:700;
`;

export const Subheading = styled.h3`
margin-top:27px;
`;

export const H4 = styled.h4`
margin:0;
`;

export const Span = styled.span`

`;

export const DropoutSection = styled(InputSection)`
gap:10px;
`;

export const LanguageSelector = styled(InputSection)`
flex-direction:row;
`;

export const HeadingContainer = styled.div `
display:flex;
align-items:center;
gap:10px;
`
export const PenIcon = styled.i `
margin-left:10px;
`

export const ModifyButtons = styled.div `
display:flex;
display: ${({ click }) => (click ? "none" : "block")};
gap:5px;
`

export const SmallBtn = styled.button `
padding:8px;
border-radius:10px;
border:none;
width: fit-content;
height:fit-content;
font-size:1em !important;
transition:box-shadow .3s;
:hover {
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
:active {
  opacity:1;
}
}
`
export const EditBtn = styled(SmallBtn) `
display: ${({ click }) => (click ? "none" : "block")};
`
