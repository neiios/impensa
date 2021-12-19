import React from "react";
import styled from "styled-components";
import theme from "../theme/Index";
import { Button } from "../components/Button/index.jsx";
// Wraps Sidebar Nav and Main-Conent
export const Container = styled.div`
  text-align: center;
  color: ${theme.bg.secondary};
  z-index: -1;
  margin-top: 75px;
  margin-right: 20px;
  margin-left: 20px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
`;

export const Heading = styled.h1`
  font-weight: 550;
  font-size: 5em;
  margin: 10px;
`;

export const SubHeading = styled.h2`
  font-weight: 550;
  font-size: 2em;
  margin: 10px;
`;
export const P = styled.p`
  font-size: 1em;
  max-width: 430px;
`;

const PageNotFound = () => {
  document.title = "Impensa - 404";

  return (
    <Container>
      <Heading>Oops!</Heading>
      <SubHeading>404 - PAGE NOT FOUND</SubHeading>
      <P>
        The page you are looking for might have been removed or is temporarily
        unavailable
      </P>
      <Button to="/">GO TO HOMEPAGE</Button>
    </Container>
  );
};

export default PageNotFound;
