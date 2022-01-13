import React from "react";
import styled from "styled-components";
import theme from "../../theme/Index";
import ToggleNewExpense from "../../components/NewExpenseModal/toggleNewExpense";
import LineGraph from "../../components/Charts/linegraph";
import moment from "moment";
import { LinkWrapper } from "../../components/Sidebar";
// Wraps Sidebar Nav and Main-Conent
import { DataContainer, ExpenseCategory } from "./style";
import { device } from "../../mediaQueries";
export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ExpenseString = styled.div`
  padding: 20px 0 20px 0;
  border-bottom: 2px solid ${theme.bg.lightestBlue};
  gap: 20px;
  align-items: center;
  display: flex;
  &:last-child {
    border: none !important;
  }
`;

export const ExpenseDate = styled.div`
  position: relative;
  font-size: 0.7em;
  font-weight: 550;
  color: grey;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

// Has all Main-block elements
export const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  gap: 20px;
  @media ${device.laptop} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const Heading = styled.h3`
padding:0;
margin:0;
font-size:1.35em;
  }
`;
export const ViewAllContainer = styled.div`
display:flex;
gap:5px;
justify-content:center;
align-items:center;
margin-top:20px;
font-size:0.9em;
font-weight:600;
color: ${theme.color.primary};
&:hover {
  color: ${theme.color.lightPrimary};
}
&:active {
  color: ${theme.color.primary};
}
`;


export const ExpenseContainer = ({ currency, heading, obj }) => {
  return (
    <>
      <Heading>{heading}</Heading>
      {obj.map((expense) => (
        <ExpenseString key={expense.expense_id}>
          <ColumnContainer>
            {`${currency} ${parseFloat(expense.expense_amount).toFixed(2)}`}
            <ExpenseDate>
              {moment.utc(expense.expense_date).format("MMM Do, YYYY")}
            </ExpenseDate>
          </ColumnContainer>
          <ExpenseCategory>{(expense.expense_category.length > 9 ? expense.expense_category.slice(0, 9).concat('...') : expense.expense_category)}</ExpenseCategory>
        </ExpenseString>
      ))}
    </>
  );
};

const Main = ({ expenses, currency }) => {
  document.title = "Dashboard - Overview";
  const newobj = expenses.slice(Math.max(expenses.length - 4, 0));
  return (
    <Container>
      <DataContainer>
        <ExpenseContainer
          obj={newobj}
          currency={currency}
          heading={"Recently spent"}
        />
        <LinkWrapper to="/dashboard/archive">
            <ViewAllContainer>
            View All
            <i class="fas fa-chevron-right fa-xs"></i>
            </ViewAllContainer>
        </LinkWrapper>
      </DataContainer>
      <DataContainer>
        <LineGraph currency={currency} expenses={expenses} />
      </DataContainer>
    </Container>
  );
};

export default Main;
