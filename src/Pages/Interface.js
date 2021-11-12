import React, {useState} from 'react'
import Sidebar from "../components/Sidebar/Index"
import styled from 'styled-components'
import UserID from '../components/UserID'
import Main from "../components/Main.js"
export const Template = styled.div `
width:100vw;
height:100vh;
display:grid;
grid-template-areas: 
            "Sidebar TopNav TopNav"
            "Sidebar MainContent MainContent"
            "Sidebar MainContent MainContent";
grid-template-rows: 50px 100%;
grid-template-columns: 1fr 1fr;
`
export const SideWrapper = styled.div`
grid-area: Sidebar;
`
export const NavWrapper = styled.div`
grid-area: TopNav;
`
export const MainWrapper = styled.div`
grid-area:MainContent;
background-color:red;
`
const Interface = () => {
    return (//FCFBFD
        <Template>
        <NavWrapper>
        <UserID/>
        </NavWrapper>
        <SideWrapper>
        <Sidebar/>
        </SideWrapper>
        <MainWrapper>
        <Main/>
        </MainWrapper>
        </Template>
    )
}

export default Interface
