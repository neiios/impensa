import React from 'react'
import styled from 'styled-components'
import {Icon} from './Sidebar/Styles.js'
export const Wrapper = styled.nav `
display:flex;
height:50px;
align-items:center;
padding-right:50px;
justify-content:right;
gap:20px;

`

export const UserName = styled.h4 `
`
export const UserCreds = styled.div `
display:flex;
gap:5px;
justify-content:center;
align-items:center;
`

export const ArrowIcon = styled(Icon) `
width:15px;
height:15px;
margin-left:0px;
`

export const UserImg = styled.img `
border-radius:50%;
image-resolution: 300dpi; 
        width: 40px;
        height: 40px;
`


const UserID = () => {
    return (
        <Wrapper>
        <Icon src="images/icons/bell.png"></Icon>
        <UserCreds>
        <UserName>Sino Bobojon</UserName>
        <ArrowIcon src="images/icons/down-arrow.png"/>
        <UserImg src="images/max.png"/>
        </UserCreds>
        </Wrapper>
    )
}

export default UserID
