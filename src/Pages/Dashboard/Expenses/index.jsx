import React, { useState } from "react";
import {
  Heading,
  ExpenseString,
  ColumnContainer,
  ExpenseDate,
} from "../Overview/style";
import {
  MonthSwitcher,
  DataContainer,
  MonthContainer,
  ExpenseCategory,
  FixedDataContainer,
  ArrowWestIcon,
  ArrowEastIcon,
  ExpenseAmount,
} from "../style";
import moment from "moment";
import { Container } from "./style";
import PieChart from "../../../components/Charts/doughnut";
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

let currentMonth = new Date().toLocaleString("en-US", { month: "2-digit" });
const Expenses = ({ expenses, currency }) => {
  document.title = "Dashboard - Expenses";

  const [counter, setCounter] = useState(currentMonth - 1);
  let incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter < 1) {
    decrementCounter = () => setCounter(months.length - 1);
  }
  if (counter >= months.length - 1) {
    incrementCounter = () => setCounter(0);
  }

  let currentMonthExpenses = expenses.filter(
    (expense) =>
      moment.utc(expense.expense_date).format("MMMM YYYY") === months[counter],
  );

  return (
    <Container>
      <DataContainer>
        <MonthSwitcher>
          <ArrowWestIcon
            className="fas fa-chevron-left fa-1x"
            onClick={decrementCounter}
          />
          <MonthContainer>{`${months[counter]}`}</MonthContainer>
          <ArrowEastIcon
            className="fas fa-chevron-right fa-1x"
            onClick={incrementCounter}
          />
        </MonthSwitcher>
        <PieChart
          currency={currency}
          currentMonth={months[counter]}
          expenses={expenses}
        />
      </DataContainer>
      {currentMonthExpenses.length === 0 ? null : (
        <FixedDataContainer>
          <>
            <Heading>{`${months[counter]} expenses`}</Heading>
            {currentMonthExpenses.map((expense, index) => (
              <div key={index}>
                <ExpenseString>
                  <ColumnContainer>
                    <ExpenseCategory>
                      {expense.expenseCategory.name.length > 16
                        ? expense.expenseCategory.name
                            .slice(0, 16)
                            .concat("...")
                        : expense.expenseCategory.name}
                    </ExpenseCategory>
                    <ExpenseDate>
                      {moment.utc(expense.expense_date).format("MMM Do, YYYY")}
                    </ExpenseDate>
                  </ColumnContainer>
                  <ExpenseAmount>
                    {`${currency} 
                    ${parseFloat(expense.amount).toFixed(2)}`}
                  </ExpenseAmount>
                </ExpenseString>
              </div>
            ))}
          </>
        </FixedDataContainer>
      )}
    </Container>
  );
};

export default Expenses;
