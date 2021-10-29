import React from 'react'
import {Link} from "react-router-dom";
import "./styles.css";
// also add in what order. order:1 etc...
const Logo = () => {
    return ( <Link style={{ textDecoration: 'none' }} className="logo" to="/LandingPage">
        <container className="logo-container">
        <img className="main-logo" src="../../images/Impensa.svg" alt="" />
        </container>
         </Link>
    ) 
}

export default Logo
