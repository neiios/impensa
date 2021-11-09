import React, {useState} from "react"
import Logo from "../Logo/index.js"
import {SidebarWrapper,Icon,IconRow} from "./Styles.js"
const Navbar = () => {
    return (
        <SidebarWrapper>    
            <Logo/>
            <Icon className="fas fa-home"> Overview</Icon>
            <Icon className="fas fa-chart-line"> Progress</Icon>
            <Icon className="fas fa-chart-area"> Analysis</Icon>
            <Icon className="fas fa-archive"> Archive</Icon>
            <IconRow>
            <Icon className="fas fa-cog"> Settings</Icon>
            <Icon className="fas fa-sign-out-alt"> Log out</Icon>
            </IconRow>
        </SidebarWrapper>

        
    )
}

export default Navbar
