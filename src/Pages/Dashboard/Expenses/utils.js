import moment from "moment";

export const getCurrentYear = () => new Date().getFullYear();
export const getCurrentMonthIndex = () => new Date().getMonth();

export const filterExpensesByMonth = (expenses, month, year) =>
  expenses
    .filter(
      (expense) =>
        moment.utc(expense.spentAt).format("MMMM YYYY") === `${month} ${year}`,
    )
    .sort((a, b) => new Date(a.spentAt) - new Date(b.spentAt));

export const truncate = (text, maxLength) =>
  text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
