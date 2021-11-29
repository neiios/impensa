import React from "react";
import { Container, 
        Heading,
        Icon } from "./styles.js";

const AppFunction = ({ icon, headline, description }) => {
  return (
    <Container>
      <Icon className={icon + " fa-2x"}></Icon>
      <Heading>{headline}</Heading>
      <p style={{ color: "#425466" }}>{description}</p>
    </Container>
  );
};

export default AppFunction;
