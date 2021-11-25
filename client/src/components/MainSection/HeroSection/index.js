import React from "react";
import {
  HeroSectionWrapper,
  Container,
  TextSection,
  Paragraph,
} from "./styles.js";
// also add in what order. order:1 etc...
function contentBlock({
  lightBg,
  lightText,
  headline,
  descriptionOne,
  descriptionTwo,
  img,
  alt,
  imgStart,
}) {
  return (
    <HeroSectionWrapper lightBg={lightBg}>
      <Container imgStart={imgStart}>
        <embed
          style={{ width: "600px", maxWidth: "100%", verticalAlign: "middle" }}
          src={img}
          alt={alt}
        />
        <TextSection lightText={lightText}>
          <h3>{headline}</h3>
          <Paragraph>
            <i class="fas fa-hand-holding-usd"></i>
            <p style={{ fontSize: "1em" }}> {descriptionOne}</p>
          </Paragraph>
          <Paragraph>
            <i class="fas fa-hand-holding-usd"></i>
            <p style={{ fontSize: "1em" }}>{descriptionTwo}</p>
          </Paragraph>
        </TextSection>
      </Container>
    </HeroSectionWrapper>
  );
}

export default contentBlock;
