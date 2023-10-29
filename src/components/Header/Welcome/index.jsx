import React from "react";
import { OutlineButton } from "../../Button/index.jsx";
import { Link } from "react-scroll";
import {
  Container,
  RowOne,
  RowTwo,
  ExploreBtn,
  ContactBtn,
  WelcomeHeading,
  WelcomeSubheading,
  Br,
  Embed,
} from "./style.jsx";
const Welcome = () => {
  return (
    <Container>
      <RowOne>
        <WelcomeHeading>
          One app <Br /> to track your expenses
        </WelcomeHeading>
        <WelcomeSubheading>
          Open your free account in minutes and begin to
          <Br /> manage your outlay wisely
        </WelcomeSubheading>
      </RowOne>
      <RowTwo>
        <ExploreBtn>
          <OutlineButton scroll="true" to="HeroSection">
            Explore
          </OutlineButton>
        </ExploreBtn>
        <ContactBtn>
          <OutlineButton
            $primary
            href="https://github.com/richard96292/impensa/discussions"
          >
            Contact us
          </OutlineButton>
        </ContactBtn>
        <Embed
          src="../../assets/images/front-img.svg"
          alt="image with the laptop and user interface of Impensa"
        />
      </RowTwo>
    </Container>
  );
};

export default Welcome;
