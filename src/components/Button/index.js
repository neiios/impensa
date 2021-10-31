import React from "react"
import {StyledButton} from "./styles.js"
import { Link } from "react-router-dom"
const Button = (props) => {
    return(
    <Link to={props.to}>
        <StyledButton primary={props.primary}>{props.name}</StyledButton>
    </Link>
    )
}

export default Button
