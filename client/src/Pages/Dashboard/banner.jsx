import React from "react";
import styled from "styled-components";
import theme from "../../theme/Index";
import ToggleNewExpense from "../../components/NewExpenseModal/toggleNewExpense.jsx";
// Wraps Sidebar Nav and Main-Conent
export const Wrapper = styled.div`
  height: 400px;
  z-index: -1;
  margin-top: 75px;
  width: 100%;
  margin: 80px 20px 0 20px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.bg.secondary};
  color: white;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
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
      <Heading>Hello there, {name}!</Heading>
      <SubHeading>We're almost there!</SubHeading>
      <P>
        To start your journey with Impensa, please add <ToggleNewExpense />
      </P>
    </Wrapper>
  );
};

export default Banner;
