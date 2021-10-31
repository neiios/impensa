import styled from "styled-components"
import theme from "../../../theme/Index"
export const Container = styled.div ` 
display:flex;
flex-direction: column;
width:250px;
`

export const Heading = styled.h4 `
font-size:.9em;
color: ${theme.text.secondary};
font-weight:600;

margin-bottom:-5px;
`