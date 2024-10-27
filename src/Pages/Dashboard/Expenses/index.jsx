import React, { useState } from "react";
import PropTypes from "prop-types";
import { Heading, DataContainer, Container } from "./Expenses.style";
import PieChart from "../../../components/Charts/doughnut";
import MonthNavigation from "./MonthNavigation";
import ExpensesList from "./ExpensesList";
import { MONTHS } from "./constants";
import {
  getCurrentYear,
  getCurrentMonthIndex,
  filterExpensesByMonth,
} from "./utils";

const adjustMonthAndYear = (monthIndex, year, increment) => {
  if (increment) {
    return monthIndex === 11 ? [0, year + 1] : [monthIndex + 1, year];
  } else {
    return monthIndex === 0 ? [11, year - 1] : [monthIndex - 1, year];
  }
};

const Expenses = ({ expenses, currency }) => {
  const [year, setYear] = useState(getCurrentYear());
  const [monthIndex, setMonthIndex] = useState(getCurrentMonthIndex());

  const handleMonthChange = (increment) => {
    const [newMonthIndex, newYear] = adjustMonthAndYear(
      monthIndex,
      year,
      increment,
    );
    setMonthIndex(newMonthIndex);
    setYear(newYear);
  };

  const currentMonthExpenses = filterExpensesByMonth(
    expenses,
    MONTHS[monthIndex],
    year,
  );

  return (
    <Container>
      <DataContainer>
        <MonthNavigation
          month={MONTHS[monthIndex]}
          year={year}
          onPrevious={() => handleMonthChange(false)}
          onNext={() => handleMonthChange(true)}
        />
        <PieChart
          currency={currency}
          currentMonth={`${MONTHS[monthIndex]} ${year}`}
          expenses={expenses}
        />
      </DataContainer>
      {currentMonthExpenses.length > 0 && (
        <>
          <Heading>{`${MONTHS[monthIndex]} ${year}`}</Heading>
          <ExpensesList expenses={currentMonthExpenses} currency={currency} />
        </>
      )}
    </Container>
  );
};

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      spentAt: PropTypes.string.isRequired,
      amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      expenseCategory: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
  currency: PropTypes.string.isRequired,
};

export default Expenses;
