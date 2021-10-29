import React from 'react'
import {Link} from "react-router-dom";
import "./styles.css"

// also add in what order. order:1 etc...
const Logo = (props) => <Link style={{ textDecoration: 'none' }} className="link">{props.name}</Link>


export default Logo
