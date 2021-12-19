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
          <Link spy={true} smooth={true} to="HeroSection">
            <OutlineButton href="#heroSection">Explore</OutlineButton>
          </Link>
        </ExploreBtn>
        <ContactBtn>
          <OutlineButton
            primary
            href="https://github.com/richard96292/impensa/discussions"
          >
            Contact us
          </OutlineButton>
        </ContactBtn>
        <Embed
          src="../../images/laptop.svg"
          alt="image with the laptop and user interface of Impensa"
        />
      </RowTwo>
    </Container>
  );
};

export default Welcome;
