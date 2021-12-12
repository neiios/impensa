import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../theme/Index";
import { FitButton } from "../Button/index.jsx";
import ModalService from "../Modal/ModalService.js";
import NewExpense from "../Modal/NewExpense.js";

const ToggleNewExpense = () => {
  const addModal = () => {
    ModalService.open(NewExpense);
  };
  return (
    <>
      <FitButton onClick={addModal}>new expense</FitButton>
    </>
  );
};

export default ToggleNewExpense;
