import React from "react";
import styled from "styled-components";
import NewExpense from "../NewExpenseModal/newExpense";
import theme from "../../theme/Index";
export const Icon = styled.i`
background: rgba(197, 199, 197, 0.3);
width:15px;
height:15px;
display:flex;
justify-content:center;
align-items:center;
color:white;
position:absolute;
top:-40px;
right: 0px;
  padding: 6px;
  border-radius: 50%;
  margin-left: auto;
  cursor: pointer;
  transition: color 1s;
  :hover {
    background: rgba(197, 199, 197, 0.2);
  }
  :active {
    background: rgba(197, 199, 197, 0.7);
  }
`;
export const Dropout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(1, 1, 1, 0.6);
`;


const Heading = styled.h3`
  color: ${theme.bg.secondary};
  margin: 0;
  font-size: 1.2em;
`;

export const ModalWrapper = styled.nav`
  border-radius:15px;
  transition: all 0.3s ease-out;
  background: white;
  z-index: 1133;
  width: 350px;
  height: fit-content;
  position: fixed;
`;

const NewExpenseModal = (props) => {
  return (
    <>
      <Dropout onClick={props.close} />
      <ModalWrapper>
      <Icon onClick={props.close} className="fas fa-times fa-xl" />
        <NewExpense />
      </ModalWrapper>
    </>
  );
};

export default NewExpenseModal;
