import React, { useState } from "react";
import styled from "styled-components";
import {
  Heading,
  ExpenseString,
  ColumnContainer,
  ExpenseDate,
} from "./overview";
import {
  NoDataBanner,
  NavigationIcon,
  MonthSwitcher,
  DataContainer,
  MonthContainer,
  ExpenseCategory,
} from "./style";
import moment from "moment";
import PieChart from "../../components/Data Visualization/doughnut";
let currentYear = new Date().getFullYear();
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

for (let i = 0; i < months.length; i++) {
  months[i] += " " + currentYear;
}

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

let currentMonth = new Date().toLocaleString("en-US", { month: "2-digit" });
const Expenses = ({ expenses, currency }) => {
  document.title = "Dashboard - Expenses";

  const [counter, setCounter] = useState(currentMonth - 1);
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
  return (
    <Container>
      <DataContainer>
        <MonthSwitcher>
          <NavigationIcon
            className="fas fa-chevron-left fa-1x"
            onClick={decrementCounter}
          />
          <MonthContainer>{`${months[counter]}`}</MonthContainer>
          <NavigationIcon
            className="fas fa-chevron-right fa-1x"
            onClick={incrementCounter}
          />
        </MonthSwitcher>
        {MonthIsEmpty ? (
          <NoDataBanner>
            There is no data to display here. Try changing the time span or
            accounts.
          </NoDataBanner>
        ) : (
          <PieChart
            currency={currency}
            currentMonth={months[counter]}
            expenses={expenses}
          />
        )}
      </DataContainer>
      <DataContainer>
        <>
          <Heading>{`${months[counter]} expenses`}</Heading>
          {newobj.map((expense) =>
            moment.utc(expense.expense_date).format("MMMM YYYY") ===
            months[counter] ? (
              <>
                <ExpenseString>
                  <ColumnContainer>
                    {`${currency} 
                    ${parseFloat(expense.expense_amount).toFixed(2)}`}
                    <ExpenseDate>
                      {moment.utc(expense.expense_date).format("MMM Do, YYYY")}
                    </ExpenseDate>
                  </ColumnContainer>
                  <ExpenseCategory>{expense.expense_category}</ExpenseCategory>
                </ExpenseString>
              </>
            ) : null
          )}
        </>
      </DataContainer>
    </Container>
  );
};

export default Expenses;

//[expenses[0]]
