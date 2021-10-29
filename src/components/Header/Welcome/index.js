import React from "react"
import {Link} from "react-router-dom"
import Button from "../../Button"
import LinkStyled from "../../LinkStyled"
import "./styles.css"
const Welcome = () => {
    return (
        <container className="welcome-section">
          <div className="welcome-text">
          <h1 className="main-h1">ONE APP <br/> TO TRACK YOUR EXPENSES</h1>
          <h3 className="supporting-h2">Open your free account in minutes and begin to <br/> manage your outlay wisely</h3>
          </div>
          <div className="front-section">
            <div className="link1"> <Link className="getstarted" style={{ textDecoration: 'none' }} to="/SignUp"><Button className="button21" name="Explore" width="150px" height="50px"/></Link></div>
            <div className="link2"> <Link className="explore" style={{ textDecoration: 'none' }} to="/"><Button className="button12" name="Contact us" width="150px" height="50px"/></Link></div>
            <img className="front-img" src="../../images/laptop.svg" alt="image with the laptop and user interface of Impensa" />
        </div>
      </container>
    )
}

export default Welcome
