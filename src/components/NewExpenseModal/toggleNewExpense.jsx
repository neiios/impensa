import React from "react";
import styled from "styled-components";
import ModalService from "../Modal/modalService";
import NewExpenseModal from "../Modal/newExpense";
import theme from "../../theme/Index";
export const Wrapper = styled.div`
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 100px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Icon = styled.div`
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background: ${theme.color.lightestPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s;
  &:hover {
    color: ${theme.color.primary};
  }
  &:active {
    color: ${theme.color.lightPrimary};
  }
`;

const ToggleNewExpense = () => {
  const addModal = () => {
    ModalService.open(NewExpenseModal);
  };
  return (
    <>
      <Icon className="fas fa-plus" primary onClick={addModal} />
    </>
  );
};

export default ToggleNewExpense;
