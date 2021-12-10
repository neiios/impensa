import React from "react";
import styled from "styled-components";
import theme from "../../theme/Index";
import ToggleNewExpense from "../../components/ModalTemplates/NewExpense";
// Wraps Sidebar Nav and Main-Conent
export const Wrapper = styled.div`
  height: 400px;
  width: 100%;
  z-index: -1;
  margin-top: 75px;
  margin-right: 20px;
  margin-left: 20px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.bg.secondary};
  color: white;
  padding: 20px;
  border-radius: 20px;
`;

export const Heading = styled.h1`
  font-weight: 550;
  font-size: 3em;
  margin: 10px;
`;

export const SubHeading = styled.h2`
  font-weight: 550;
  font-size: 2em;
  margin: 10px;
`;

export const Italic = styled.i``;

export const P = styled.p`
  font-size: 1em;
`;

const Banner = ({ name }) => {
  return (
    <Wrapper>
      <Heading>
        Hello there, <Italic>{name}!</Italic>
      </Heading>
      <SubHeading>We're almost there!</SubHeading>
      <P>
        To start your journey with Impensa, please enter <ToggleNewExpense />
      </P>
    </Wrapper>
  );
};

export default Banner;
