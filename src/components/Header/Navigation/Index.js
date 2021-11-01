import React, {useState} from "react"
import Logo from "../../Logo/index"
import {Button} from "../../Button";
import "./Styles.css"
const Navbar = () => {
    const [isShown, setIsShown] = useState(false);
    return (
        <nav className="navbar">
            <div className="inNavbar">
                            <div className="aaa">
                            <Logo/>
                            </div>
                            <ul id="navbar_ul">
                                <li className="option two">
                                <Button to="/obama.com">Sign in</Button>                           
                                </li>
                                <li className="option three">
                                <Button to="/obama.com">Sign up</Button>     
                                </li>
                            </ul>
                    </div>
                                    
        </nav>

        
    )
}

export default Navbar
