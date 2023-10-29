import React from "react";
import LineGraph from "../../../components/Charts/linegraph";
import moment from "moment";
import { DataContainer, ExpenseCategory, ExpenseAmount } from "../style";
import {
  Heading,
  ExpenseString,
  ColumnContainer,
  ExpenseDate,
  Container,
  ViewAllContainer,
  LinkWrapper,
} from "./style";

export const ExpenseContainer = ({ currency, heading, obj }) => {
  return (
    <>
      <Heading>{heading}</Heading>
      {obj.map((expense) => (
        <ExpenseString key={expense.id}>
          <ColumnContainer>
            <ExpenseCategory>
              {expense.expenseCategory.name.length > 16
                ? expense.expenseCategory.name.slice(0, 16).concat("...")
                : expense.expenseCategory.name}
            </ExpenseCategory>
            <ExpenseDate>
              {moment.utc(expense.createdAt).format("MMM Do, YYYY")}
            </ExpenseDate>
          </ColumnContainer>
          <ExpenseAmount>
            -{`${currency} ${parseFloat(expense.amount).toFixed(2)}`}
          </ExpenseAmount>
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
        <ViewAllContainer>
          <LinkWrapper to="/dashboard/archive">
            View All
            <i className="fas fa-chevron-right fa-xs"></i>
          </LinkWrapper>
        </ViewAllContainer>
      </DataContainer>
      <DataContainer>
        <LineGraph currency={currency} expenses={expenses} />
      </DataContainer>
    </Container>
  );
};

export default Main;
