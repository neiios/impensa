import React from 'react'
import Sidebar from "../../components/Sidebar/Index"
import styled from 'styled-components'
import UserID from './UserID'
import Main from "./Main.js"
export const MainWrapper = styled.div `
position:absolute;
left:270px;
top:70px;
right:50px;
`

const Interface = () => {
    return (//FCFBFD
        <>
            <Sidebar/>
            <UserID/>
            <MainWrapper>
            <Main/>
            </MainWrapper>
        </>
    )
}

export default Interface
