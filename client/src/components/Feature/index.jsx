import React from "react";
import { Container, Heading, Icon, P } from "./style.jsx";

const Feature = ({ icon, headline, description }) => {
  return (
    <Container>
      <Icon className={icon + " fa-2x"}></Icon>
      <Heading>{headline}</Heading>
      <P>{description}</P>
    </Container>
  );
};

export default Feature;
