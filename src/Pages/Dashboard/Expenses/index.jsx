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

const currentYear = new Date().getFullYear();
const currentMonthIndex = new Date().getMonth();

const Expenses = ({ expenses, currency }) => {
  const [year, setYear] = useState(currentYear);
  const [monthIndex, setMonthIndex] = useState(currentMonthIndex);

  const incrementMonth = () => {
    if (monthIndex === 11) {
      setMonthIndex(0);
      setYear(year + 1);
    } else {
      setMonthIndex(monthIndex + 1);
    }
  };

  const decrementMonth = () => {
    if (monthIndex === 0) {
      setMonthIndex(11);
      setYear(year - 1);
    } else {
      setMonthIndex(monthIndex - 1);
    }
  };

  let currentMonthExpenses = expenses
    .filter(
      (expense) =>
        moment.utc(expense.spentAt).format("MMMM YYYY") ===
        `${months[monthIndex]} ${year}`,
    )
    .sort((a, b) => new Date(a.spentAt) - new Date(b.spentAt)); // Sort expenses by date

  return (
    <Container>
      <DataContainer>
        <MonthSwitcher>
          <ArrowWestIcon
            className="fas fa-chevron-left fa-1x"
            onClick={decrementMonth}
          />
          <MonthContainer>{`${months[monthIndex]} ${year}`}</MonthContainer>
          <ArrowEastIcon
            className="fas fa-chevron-right fa-1x"
            onClick={incrementMonth}
          />
        </MonthSwitcher>
        <PieChart
          currency={currency}
          currentMonth={`${months[monthIndex]} ${year}`}
          expenses={expenses}
        />
      </DataContainer>
      {currentMonthExpenses.length === 0 ? null : (
        <FixedDataContainer>
          <>
            <Heading>{`${months[monthIndex]} ${year}`}</Heading>
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
                      {moment.utc(expense.spentAt).format("MMM Do, YYYY")}
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
