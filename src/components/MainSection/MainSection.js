import React from 'react'
import AppFunction from './Feature/Index'
import contentBlock from './Functions/index'
import "./styles.css"

// also add in what order. order:1 etc...
const MainSection = () => {
    return (
    <>
    <contentBlock/>
    <AppFunction/>
    </>
    )
}

export default MainSection
