import React from "react";
import { Container, 
        Heading,
        Icon,
        P } from "./styles.js";

const AppFunction = ({ icon, headline, description }) => {
  return (
    <Container>
      <Icon className={icon + " fa-2x"}></Icon>
      <Heading>{headline}</Heading>
      <P>{description}</P>
    </Container>
  );
};

export default AppFunction;
