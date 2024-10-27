import React from "react";
import PropTypes from "prop-types";
import { FixedDataContainer } from "../Expenses.style";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses, currency }) => (
  <FixedDataContainer>
    {expenses.map((expense) => (
      <ExpenseItem key={expense.id} expense={expense} currency={currency} />
    ))}
  </FixedDataContainer>
);

ExpensesList.propTypes = {
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

export default ExpensesList;
