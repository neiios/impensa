import React from 'react'
import {Link} from "react-router-dom";
import Button from "../../components/Button/index"
import "./LandingPageStyles.css"
import data from '../../data/data.json'
import AppFunctionData from '../../data/AppFunctionData.json'
import Footer from '../../components/Footer/Index'
import Header from "../../components/Header/index"
import AppFunction from "../../components/MainSection/Features/Index"
import ContentBlock from "../../components/MainSection/Functions/index"
const listItems = data.map (item => 
    <div>
                <ContentBlock heading={item.heading} 
                firstBullet={item.firstBullet} 
                secondBullet={item.secondBullet} 
                image={item.image}
                backgroundColor={item.backgroundColor}
                color={item.color}
                textOrder={item.textOrder}
                imgOrder={item.imgOrder}/>
    </div>
    )

    const AppFunctions = AppFunctionData.map (item => 
        <div>
                    <AppFunction image={item.image} 
                    heading={item.heading} 
                    description={item.description}/>
        </div>
        )
const LandingPage = (isSticky, element) => {
    return (//FCFBFD
        <div className="block_1">
            <Header/>
            {listItems}
            <div className="features">
                <div className="row-1">
                    <h2 className="section-heading">Express Functionality</h2>
                    <p className="section-subheading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati<br/> dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                    </div>
                <div className="row-2">
                    {AppFunctions}
                </div>
            </div>
         
            <Footer />
        </div>
    )
}

export default LandingPage
