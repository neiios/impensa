import React from "react"
import {BiggerButton} from "../../Button"
import "./styles.css"
const Welcome = () => {
    return (
        <container className="welcome-section">
          <div className="welcome-text">
          <h1 className="main-h1">One app <br/> to track your expenses</h1>
          <h4 className="supporting-h2">Open your free account in minutes and begin to <br/> manage your outlay wisely</h4>
          </div>
          <div className="front-section">
            <div className="link1"><BiggerButton href="/obama.com" >Explore</BiggerButton></div>
            <div className="link2"><BiggerButton primary href="/obama.com" >Contact us</BiggerButton></div>
            <embed className="front-img" src="../../images/laptop.svg" alt="image with the laptop and user interface of Impensa" />
        </div>
      </container>
    )
}

export default Welcome
