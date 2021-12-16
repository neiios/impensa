import React, { useState } from "react";
import styled from "styled-components";
import {
  Heading,
  ExpenseString,
  ColumnContainer,
  ExpenseDate,
} from "./overview";
import {
  ArchiveContainer,
  H3,
  HeaderContainer,
  Select,
  Option,
  NavigationIcon,
  ExpenseCategoryCentered,
  AlterExpense,
  MonthSwitcher,
  DataContainer,
  MonthContainer,
  ExpenseCategory,
} from "./style";
import moment from "moment";
import PieChart from "../../components/Data Visualization/piechart";
import { ExpenseContainer } from "./overview.jsx";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  gap: 20px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

let currentMonth = new Date().toLocaleString("en-US", { month: "long" });
const MonthIndex = () => {
  for (let i = 0; i < months.length; i++) {
    if (currentMonth === months[i]) return i;
  }
};
const Expenses = ({ expenses, currency }) => {
  const [counter, setCounter] = useState(MonthIndex);
  let incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 1) {
    decrementCounter = () => setCounter(months.length - 1);
  }
  if (counter >= months.length - 1) {
    incrementCounter = () => setCounter(0);
  }
  /*
  let newobj = expenses.slice(Math.max(expenses.length - expenses.length, 0));
  newobj.map((expense) =>
    moment.utc(expense.expense_date).format("MM/DD/Y") === currentUserDate
      ? i++
      : i
  );

  */
  let i = expenses.length;
  let MonthIsEmpty = false;
  const newobj = expenses.slice(Math.max(expenses.length - i, 0));
  let monthAmount = 0,
    monthDate,
    monthCategory,
    monthDescription;
  return (
    <Container>
      <DataContainer>
        <MonthSwitcher>
          <NavigationIcon
            className="fas fa-chevron-left"
            onClick={decrementCounter}
          />
          <MonthContainer>{months[counter]}</MonthContainer>
          <NavigationIcon
            className="fas fa-chevron-right"
            onClick={incrementCounter}
          />
        </MonthSwitcher>
        <PieChart expenses={expenses} />
      </DataContainer>
      <DataContainer>
        <>
          <Heading>{`${months[counter]} expenses`}</Heading>
          {newobj.map((expense) =>
            moment.utc(expense.expense_date).format("MM") ===
            (counter + 1).toString() ? (
              <>
                <ExpenseString>
                  <ColumnContainer>
                    {`${currency} ${expense.expense_amount}`}
                    <ExpenseDate>
                      {moment.utc(expense.expense_date).format("MMM Do, YYYY")}
                    </ExpenseDate>
                  </ColumnContainer>
                  <ExpenseCategory>{expense.expense_category}</ExpenseCategory>
                </ExpenseString>
              </>
            ) : (
              (MonthIsEmpty = true)
            )
          )}
        </>
        {MonthIsEmpty
          ? "There is no data to display here. Try changing the time span or accounts."
          : null}
      </DataContainer>
    </Container>
  );
};

export default Expenses;

//[expenses[0]]
