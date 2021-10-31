import React from 'react'
import LinkStyled from "../LinkStyled/index"
import "./Styles.css"
// also add in what order. order:1 etc...
const Footer = () => {
    return (
        <footer>
            <div className="contentContainer">
                    <div className="contact-year">© 2021 | <LinkStyled name="Contact"/></div>
                    <i class="fab fa-github"/>
                </div>
        </footer>
    )
}

export default Footer
