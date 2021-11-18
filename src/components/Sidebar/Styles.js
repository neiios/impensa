import styled from "styled-components";
import Logo from "../Logo/index.js"
//import theme from "/theme/Index"

export const SidebarWrapper = styled.nav `
    display:flex;
    flex-direction: column;
    gap:10px;
    padding-top:20px;
    max-width:100%;
    width:230px;
    height:100vh;
    left:0;
    right:0;
    top:0px;
    border-right: 2px solid #F6E5E5;
`

export const StyledLi = styled.a `
`


export const Icon = styled.img `
width:15px;
`

export const MenuEl = styled.div `
display:flex;
gap:20px;
height:45px;
width:160px;
margin-left:30px;
align-items:center;
justify-content:center;
border-radius:15px;
transition: background-color .3s;
:hover {
background-color: rgba(126,87,194, .2);
}
`

export const IconRow = styled.div `
display:flex;
flex-direction:column;
gap:31px;
margin-top: auto;
margin-bottom:50px;
`

