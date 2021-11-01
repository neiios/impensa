import React from 'react'
import LinkStyled from "../LinkStyled/index"
import {Link, A} from "../Button/index"
import "./Styles.css"
// also add in what order. order:1 etc...
const Footer = () => {
    return (
        <footer>
            <div className="contentContainer">
                    <div className="contact-year">© 2021 | <LinkStyled name="Contact"/></div>
                    <a href="https://github.com/tmneth/impensa-budgeting-app"><i class="fab fa-github"/></a>
                </div>
        </footer>
    )
}

export default Footer
