import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../theme/Index";
import { FitButton } from "../Button/index.jsx";
import ModalService from "../Modal/ModalService.js";
export const Wrapper = styled.div`
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 100px;
  padding-left: 20px;
  padding-right: 20px;
`;

const NewExpenseModal = () => {
  return <Wrapper>Hi</Wrapper>;
};

const ToggleNewExpense = () => {
  const addModal = () => {
    ModalService.open(NewExpenseModal);
  };
  return (
    <>
      <FitButton onClick={addModal}>new expense</FitButton>
    </>
  );
};

export default ToggleNewExpense;
