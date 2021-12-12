import React, { useState } from "react";
import styled from "styled-components";
import { SpentBtn } from "../Button/index.jsx";
import ModalService from "../Modal/ModalService.js";
import NewExpense from "../Modal/NewExpense.js";

const ToggleNewExpense = () => {
  const addModal = () => {
    ModalService.open(NewExpense);
  };
  return (
    <>
      <SpentBtn onClick={addModal}>Add new expense</SpentBtn>
    </>
  );
};

export default ToggleNewExpense;
