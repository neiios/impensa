import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../../../theme/Index";
import { FitButton } from "../../../Button/index.jsx";
export const Wrapper = styled.div`
  display: flex;
  padding: 10px;
`;

export const Heading = styled.h4``;

const NewExpense = () => {
  return (
    <Wrapper>
      <Heading>Labels: </Heading>
    </Wrapper>
  );
};

export default NewExpense;
