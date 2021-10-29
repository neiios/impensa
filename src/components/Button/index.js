import React from "react"
import "./styles.css"
const Button = (props) => {
    const myStyle = {
    color: props.color,
    backgroundColor: props.backgroundColor,
    width: props.width,
    height: props.height
    } 
    return (
 <button style={myStyle} className="btn">{props.name}</button>
    )}
export default Button
