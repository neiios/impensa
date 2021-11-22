import React from 'react'
import {ModifiedLink} from "../Button"
import {FooterWrapper,Container} from "./styles.js"
const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                    <div style={{display:"flex", gap:"5px"}}>© 2021 | <ModifiedLink to="a">Contact</ModifiedLink></div>
                    <div style={{marginLeft: "auto", position:"relative"}}>
                        <ModifiedLink href="https://github.com/tmneth/impensa-budgeting-app">
                            <i class="fab fa-github"/>
                        </ModifiedLink>
                    </div>
                </Container>
        </FooterWrapper>
    )
}

export default Footer
