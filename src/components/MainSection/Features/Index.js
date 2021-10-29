import React from "react"
import "./styles.css"

const AppFunction = (props) => {
    return (
        <div className="container">
            <img className="minilogo" src={props.image} alt="" />
            <h4>{props.heading}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default AppFunction