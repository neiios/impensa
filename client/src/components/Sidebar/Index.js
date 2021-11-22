import React, {useState} from "react"
import { ModifiedLink } from '../Button/index.js'
import {SidebarWrapper,Icon,IconRow, MenuEl} from "./Styles.js"
const Navbar = () => {
    return (
        <SidebarWrapper>    
            <MenuEl><Icon src="images/icons/home.png"/><ModifiedLink to="/Interface">Overview</ModifiedLink></MenuEl>
            <MenuEl><Icon src="images/icons/progress.png"/><ModifiedLink to="/home">Progress</ModifiedLink></MenuEl>
            <MenuEl><Icon src="images/icons/analysis.png"/><ModifiedLink to="/home">Analysis</ModifiedLink></MenuEl>
            <MenuEl> <Icon src="images/icons/archive.png"/><ModifiedLink to="/home">Archive</ModifiedLink></MenuEl>
            <IconRow>
            <MenuEl><Icon src="images/icons/settings.png"/><ModifiedLink to="/home">Settings</ModifiedLink></MenuEl>
            <MenuEl> <Icon src="images/icons/exit.png"/><ModifiedLink to="/home">Log out</ModifiedLink></MenuEl>
            </IconRow>
        </SidebarWrapper>

        
    )
}

/*
            <Icon className="fas fa-home"> Overview</Icon>
            <Icon className="fas fa-chart-line"> Progress</Icon>
            <Icon className="fas fa-chart-area"> Analysis</Icon>
            <Icon className="fas fa-archive"> Archive</Icon>
            <Icon className="fas fa-cog"> Settings</Icon>
            <Icon className="fas fa-sign-out-alt"> Log out</Icon>

*/
export default Navbar
