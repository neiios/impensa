import React from "react";
import {
  HeroSectionWrapper,
  Container,
  TextSection,
  TextSubSection,
  P,
  H3,
  Icon,
  Embed,
} from "./style.jsx";
const HeroSection = ({
  lightBg,
  lightText,
  headline,
  descriptionOne,
  descriptionTwo,
  img,
  alt,
  imgStart,
}) => {
  return (
    <HeroSectionWrapper $lightBg={lightBg}>
      <Container $imgStart={imgStart}>
        <Embed src={img} alt={alt} />
        <TextSection $lightText={lightText}>
          <H3>{headline}</H3>
          <TextSubSection>
            <Icon className="fas fa-hand-holding-usd" />
            <P> {descriptionOne}</P>
          </TextSubSection>
          <TextSubSection>
            <Icon className="fas fa-hand-holding-usd" />
            <P>{descriptionTwo}</P>
          </TextSubSection>
        </TextSection>
      </Container>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
