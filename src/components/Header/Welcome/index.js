import React from "react"
import {Link} from "react-router-dom"
import Button from "../../Button"
import LinkStyled from "../../LinkStyled"
import "./styles.css"
const Welcome = () => {
    return (
        <container className="welcome-section">
          <div className="welcome-text">
          <h1 className="main-h1">One app <br/> to track your expenses</h1>
          <h4 className="supporting-h2">Open your free account in minutes and begin to <br/> manage your outlay wisely</h4>
          </div>
          <div className="front-section">
            <div className="link1"><Button name="Explore"/></div>
            <div className="link2"><Button name="Contact us"/></div>
            <embed className="front-img" src="../../images/laptop.svg" alt="image with the laptop and user interface of Impensa" />
        </div>
      </container>
    )
}

export default Welcome
