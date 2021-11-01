import styled from "styled-components";
import theme from "../../theme/Index"
export const FooterWrapper = styled.footer `
    margin-top:30px;
    /*width:100vw;*/
    background: ${theme.bg.alt};
    display:flex;
    justify-content: center;
    bottom: 0;
    width:100vw;
`

export const Container = styled.div `
    width:1200px;
    bottom:0;
    padding:10px;
    left:0;
    right:0;
    height:30px;
    display:flex;
    align-items: center;
    color:${theme.text.grey}
`