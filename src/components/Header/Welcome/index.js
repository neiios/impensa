import React from "react"
import {BiggerButton} from "../../Button"
import {Container, 
        RowOne, 
        RowTwo,  
        ExploreBtn, 
        ContactBtn,
        WelcomeHeading,
        WelcomeSubheading} from "./styles.js"
const Welcome = () => {
    return (
        <Container>
          <RowOne>
            <WelcomeHeading>One app <br/> to track your expenses</WelcomeHeading>
            <WelcomeSubheading>Open your free account in minutes and begin to 
              <br/> manage your outlay wisely
            </WelcomeSubheading>
          </RowOne>
          <RowTwo>
              <ExploreBtn>
                <BiggerButton href="/obama.com" >Explore</BiggerButton>
              </ExploreBtn>
              <ContactBtn>
                <BiggerButton primary href="/obama.com" >Contact us</BiggerButton>
              </ContactBtn>
              <embed style={{width:"750px", maxWidth:"100%", gridArea: "img"}} src="../../images/laptop.svg" alt="image with the laptop and user interface of Impensa" />
          </RowTwo>
      </Container>
    )
}

export default Welcome
