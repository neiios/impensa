import React from 'react'
import {Link} from "react-router-dom";
import "./styles.css";
// also add in what order. order:1 etc...
const Logo = () => {
    return ( <Link style={{ textDecoration: 'none' }} className="logo" to="/LandingPage">
        <container className="logo-container">
    Impensa
        </container>
         </Link>
    ) 
}

export default Logo
