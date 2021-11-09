import React, {useState} from "react"
import Logo from "../../Logo/index"
import {Button} from "../../Button";
import {NavbarWrapper, NavMenu, NavbarContainer, NavItem} from "./styles.js"
import {Modal} from "../../Modal/Modal.js"
import SignIn from "../../../Pages/SignIn/SignIn.js";
import SignUp from "../../SignUp/SignUp";
import { GlobalStyle } from "../../Modal/Styles";
const Navbar = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(prev => !prev);
    };
    return (
        <NavbarWrapper>
            <NavbarContainer>
                            <Logo/>
                            <NavMenu>
                                <NavItem>
                                <Button onClick={openModal}>Sign in</Button>                                   </NavItem>
                                <NavItem>
                                <Button onClick={openModal}>Sign up</Button>     
                                </NavItem>
                                <NavItem>
                                <Button to="/Interface">Demo</Button>     
                                </NavItem>
                            </NavMenu>
                    </NavbarContainer>     
                    <Modal children={<SignIn></SignIn>} showModal={showModal} setShowModal={setShowModal} />                        
        </NavbarWrapper>
    )
}

export default Navbar