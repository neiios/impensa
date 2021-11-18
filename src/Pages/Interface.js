import React, {useState} from 'react'
import Sidebar from "../components/Sidebar/Index"
import styled from 'styled-components'
import UserID from '../components/UserID'
import Main from "../components/Main.js"
export const Template = styled.div `
display:flex;
`
export const NavWrapper = styled.div`
left:0;
position:fixed;
width:260px;
z-index:100;
background-color: white;
`
export const MainWrapper = styled.div`
height:100vh;
left:270px;
right:0;
position:absolute;
display:flex;
flex-direction:column;
`
const Interface = () => {
    return (//FCFBFD
        <Template>
        <NavWrapper>
            <Sidebar/>
        </NavWrapper>

        <MainWrapper>
            <UserID/>
            <Main/>
        </MainWrapper>
        </Template>
    )
}

export default Interface
