import React from 'react'
import {Link} from "react-router-dom";
import "./Styles.css"
import LinkStyled from "../LinkStyled/index"
import Button from '../Button';
// also add in what order. order:1 etc...
const Footer = () => {
    return (
        <footer>
            <div className="contentContainer">
                    <div className="contact-year">© 2021 | Contact</div>
                    <div className="contacts-links">
                    <div><i class="fab fa-github"/></div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer
