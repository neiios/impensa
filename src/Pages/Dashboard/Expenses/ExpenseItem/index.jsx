import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import {
  ExpenseString,
  ColumnContainer,
  ExpenseDate,
  ExpenseCategory,
  ExpenseAmount,
} from "../style";
import { truncate } from "../utils";

const ExpenseItem = ({ expense, currency }) => (
  <ExpenseString>
    <ColumnContainer>
      <ExpenseCategory>
        {truncate(expense.expenseCategory.name, 16)}
      </ExpenseCategory>
      <ExpenseDate>
        {moment.utc(expense.spentAt).format("MMM Do, YYYY")}
      </ExpenseDate>
    </ColumnContainer>
    <ExpenseAmount>
      {`${currency} ${parseFloat(expense.amount).toFixed(2)}`}
    </ExpenseAmount>
  </ExpenseString>
);

ExpenseItem.propTypes = {
  expense: PropTypes.shape({
    spentAt: PropTypes.string.isRequired,
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    expenseCategory: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  currency: PropTypes.string.isRequired,
};

export default ExpenseItem;
