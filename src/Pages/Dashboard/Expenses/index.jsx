import React, { useState } from "react";
import PropTypes from "prop-types";
import { Heading } from "../Overview/style";
import {
  MonthSwitcher,
  DataContainer,
  MonthContainer,
  FixedDataContainer,
  ArrowWestIcon,
  ArrowEastIcon,
} from "../style";
import { Container } from "./style";
import PieChart from "../../../components/Charts/doughnut";
import ExpenseItem from "./ExpenseItem";
import { MONTHS } from "./constants";
import {
  getCurrentYear,
  getCurrentMonthIndex,
  filterExpensesByMonth,
} from "./utils";

const Expenses = ({ expenses, currency }) => {
  const [year, setYear] = useState(getCurrentYear());
  const [monthIndex, setMonthIndex] = useState(getCurrentMonthIndex());

  const incrementMonth = () => {
    if (monthIndex === 11) {
      setMonthIndex(0);
      setYear((prevYear) => prevYear + 1);
    } else {
      setMonthIndex((prevIndex) => prevIndex + 1);
    }
  };

  const decrementMonth = () => {
    if (monthIndex === 0) {
      setMonthIndex(11);
      setYear((prevYear) => prevYear - 1);
    } else {
      setMonthIndex((prevIndex) => prevIndex - 1);
    }
  };

  const currentMonthExpenses = filterExpensesByMonth(
    expenses,
    MONTHS[monthIndex],
    year,
  );

  return (
    <Container>
      <DataContainer>
        <MonthSwitcher>
          <ArrowWestIcon
            className="fas fa-chevron-left fa-1x"
            onClick={decrementMonth}
          />
          <MonthContainer>{`${MONTHS[monthIndex]} ${year}`}</MonthContainer>
          <ArrowEastIcon
            className="fas fa-chevron-right fa-1x"
            onClick={incrementMonth}
          />
        </MonthSwitcher>
        <PieChart
          currency={currency}
          currentMonth={`${MONTHS[monthIndex]} ${year}`}
          expenses={expenses}
        />
      </DataContainer>
      {currentMonthExpenses.length > 0 && (
        <FixedDataContainer>
          <Heading>{`${MONTHS[monthIndex]} ${year}`}</Heading>
          {currentMonthExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              currency={currency}
            />
          ))}
        </FixedDataContainer>
      )}
    </Container>
  );
};

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
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
