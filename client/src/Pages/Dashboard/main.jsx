import React from "react";
import styled from "styled-components";
import theme from "../../theme/Index";
import ToggleNewExpense from "../../components/ModalTemplates/NewExpense";
import LineGraph from "../../components/Data Visualization/linegraph";
import moment from "moment";
// Wraps Sidebar Nav and Main-Conent

export const DataContainer = styled.div`
  position: relative;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  height: 500px;
`;

export const ExpenseString = styled.div`
  padding: 20px 0 20px 0;
  border-bottom: 2px solid ${theme.bg.lightestBlue};
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const ExpenseDate = styled.div`
  position: relative;
  margin-left: auto;
  font-size: 0.7em;
  font-weight: 550;
  color: grey;
`;

export const ExpenseDescription = styled.div`
  background: ${theme.bg.secondary};
  color: white;
  padding: 5px;
  border-radius: 10px;
  left: 120px;
  position: absolute;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const Wrapper = styled.div`
  z-index: -1;
  margin-top: 75px;
  margin-right: 20px;
  margin-left: 20px;
  z-index: 100;
  width: 100%;
  background-color: ${theme.bg.lightestBlue};
  min-height: 100vh;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
// Has all Main-block elements
export const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  gap: 20px;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const Heading = styled.h3`
padding:0;
margin-top:0;
margin-bottom:20px;
  }
`;

const Main = ({ expenses }) => {
  const labels = expenses;
  // reducing object's size to the last 5 elements
  const newobj = labels.slice(Math.max(labels.length - 6, 0));

  return (
    <Wrapper>
      <Container>
        <DataContainer>
          <Heading>Recently spent</Heading>
          {newobj.map((expense) => (
            <ExpenseString key={expense.expense_id}>
              {expense.expense_amount}
              <ExpenseDescription>
                {expense.expense_category}
              </ExpenseDescription>
              <ExpenseDate>
                {moment.utc(expense.expense_date).format("MMM Do, YYYY")}
              </ExpenseDate>
            </ExpenseString>
          ))}
          <ButtonContainer>
            <ToggleNewExpense />
          </ButtonContainer>
        </DataContainer>
        <DataContainer>
          <LineGraph expenses={expenses} />
        </DataContainer>
      </Container>
    </Wrapper>
  );
};

export default Main;
