import styled from "styled-components";
//import theme from "/theme/Index"

export const NavbarWrapper = styled.nav `
    display:flex;
    max-width:100%;
    position:fixed;
    width:100vw;
    left:0;
    right:0;
    top:0px;
    background-color: white;
    justify-content: center;
`

export const NavMenu = styled.ul` 
    padding: 0 10px 0 0;
    margin:0;
    gap:20px;
    list-style: none;
    display:flex;
    margin-left: auto;
`
export const NavbarContainer = styled.div`
    height:70px;
    padding-right:20px;
    padding-left:20px;
    width:1200px;
    display:flex;
    align-items: center;
    justify-content: center;
`
export const NavItem = styled.li`

`