import React from "react";
import { Container, Heading } from "./styles.js";

const AppFunction = ({ icon, headline, description }) => {
  return (
    <Container>
      <i style={{ color: "#0A2540" }} class={icon + " fa-2x"}></i>
      <Heading>{headline}</Heading>
      <p style={{ color: "#425466" }}>{description}</p>
    </Container>
  );
};

export default AppFunction;
