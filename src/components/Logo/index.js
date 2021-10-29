import React from 'react'
import {Link} from "react-router-dom";
import "./styles.css";
import logoimg from "../../images/aaa-logo.svg"
// also add in what order. order:1 etc...
const Logo = () => {
    return ( <Link style={{ textDecoration: 'none' }} className="logo" to="/LandingPage">
        <container className="logo-container">
        <img className="main-logo" src={logoimg} alt="" /><div className="logo-addition">mpensa</div>
        </container>
         </Link>
    ) 
}

export default Logo
