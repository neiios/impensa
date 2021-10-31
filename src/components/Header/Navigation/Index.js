import React, {useState} from "react"
import {Link} from "react-router-dom";
import Logo from "../../Logo/index"
import Button from "../../Button";
import "./Styles.css"
const Navbar = () => {
    const [isShown, setIsShown] = useState(false);
    return (
        <nav className="navbar">
            <div className="inNavbar">
                            <div className="aaa">
                            <Logo/>
                            <i class="far fa-question-circle" 
                            onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}></i>
       {isShown && (
        <div className="what-is-impensa">
          <p><span className="Impensa-span">Impensa</span> - Latin for “Expenditure”. This name has not been registred, it only holds semantic meaning</p>
        </div>
      )}
                            </div>
                            <div className="SuperObamium" className={"nav-options active nav-options"} >
                            <div className="menu-div">
                    </div>
                            <ul id="navbar_ul">
                                <li className="option two">
                                <Button primary name="SIGN IN"/>                                
                                </li>
                                <li className="option three">
                                <Button primary  name="SIGN UP"/>
                                </li>
                            </ul>
                    </div>
                    </div>
                                    
        </nav>

        
    )
}

export default Navbar
