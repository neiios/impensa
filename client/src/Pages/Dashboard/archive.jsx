import React, { useState } from "react";
import {
  ArchiveContainer,
  OneExpenseContainer,
  DateContainer,
  ExpenseCategory,
  ExpenseDescription,
  H3,
  HeaderContainer,
  ExpenseWrapper,
  ExpenseItem,
  Select,
  Option,
} from "./style";
import moment from "moment";
import ExcelExport from "./excelExport";
// Wraps Sidebar Nav and Main-Conent

const Archive = ({ expenses }) => {
  const getInitialState = () => {
    const value = "10";
    return value;
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const [value, setValue] = useState(getInitialState);
  let newobj;
  value === "Most recent"
    ? (newobj = expenses.slice(Math.max(expenses.length - value, 0)).reverse())
    : (newobj = expenses.slice(Math.max(expenses.length - value, 0)));
  if (value === 1)
    newobj = expenses.slice(Math.max(expenses.length - value, 0));

  return (
    <ArchiveContainer>
      <HeaderContainer>
        <H3>Archive</H3>
        <Select value={value} onChange={handleChange}>
          <Option value="Most recent">Recent first</Option>
          <Option value="Oldest">Oldest first</Option>
          <Option value="1">Last expense</Option>
          <Option value="expenses.length">Display all</Option>
        </Select>

        <ExcelExport expenses={expenses} />
      </HeaderContainer>
      {newobj.map((expense) => (
        <OneExpenseContainer>
          <ExpenseWrapper key={expense.expense_id}>
            <ExpenseItem>{expense.expense_amount}</ExpenseItem>
            <ExpenseDescription>
              {expense.expense_description.length === 0
                ? "No description provided"
                : expense.expense_description}
            </ExpenseDescription>
            <ExpenseCategory>{expense.expense_category}</ExpenseCategory>
            <DateContainer>
              {moment.utc(expense.expense_date).format("MMM Do, YYYY")}
            </DateContainer>
          </ExpenseWrapper>
        </OneExpenseContainer>
      ))}
    </ArchiveContainer>
  );
};

export default Archive;

/*
 const newobj = expenses.slice(Math.max(expenses.length - 5, 0));

  return (
    <Container>
      <DataContainer>
        <Heading>Recently spent</Heading>
        {newobj.map((expense) => (
          <ExpenseString key={expense.expense_id}>
            <ColumnContainer>
              {expense.expense_amount}
              <ExpenseDate>
                {moment.utc(expense.expense_date).format("MMM Do, YYYY")}
              </ExpenseDate>
            </ColumnContainer>
            <ExpenseDescription>{expense.expense_category}</ExpenseDescription>
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
*/
