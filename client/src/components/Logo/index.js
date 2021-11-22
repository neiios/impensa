import React from 'react'
import {ModifiedLink} from "../Button"
import styled from 'styled-components'


 const LogoImg = styled.img `
width:30px;
`
export const Logo = () => 
<ModifiedLink style={{fontSize:"1em", fontWeight:"700", color:"black"}} to="/" ><LogoImg src="images/Impensa-logo.svg"/> Impensa</ModifiedLink>

export default Logo
