import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../theme/Index";
import { Button } from "../Button/index.jsx";
import ModalService from "../Modal/ModalService.js";
import NewExpenseModal from "../Modal/NewExpense.js";
export const Wrapper = styled.div`
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 100px;
  padding-left: 20px;
  padding-right: 20px;
`;

const ToggleNewExpense = () => {
  const addModal = () => {
    ModalService.open(NewExpenseModal);
  };
  return (
    <>
      <Button onClick={addModal}>new expense</Button>
    </>
  );
};

export default ToggleNewExpense;
