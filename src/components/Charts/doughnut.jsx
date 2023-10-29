import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { DoughnutWrapper } from "./style";
import moment from "moment";
import { NoDataWarning } from "./style.jsx";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  maintainAspectRatio: true,
  responsive: true,
  plugins: {
    legend: false,
  },
};

const PieChart = ({ expenses, currentMonth }) => {
  let currentMonthExpenses = expenses.filter(
    (expense) =>
      moment.utc(expense.expense_date).format("MMMM YYYY") === currentMonth,
  );

  var expensesMerged = currentMonthExpenses.reduce((object, item) => {
    var category = item.expenseCategory.name;
    var amount = item.amount;

    if (!object.hasOwnProperty(category)) {
      object[category] = 0;
    }

    object[category] += parseFloat(amount);
    return object;
  }, {});

  var keys = Object.keys(expensesMerged);
  var values = keys.map(function (key) {
    return expensesMerged[key];
  });

  const data = {
    labels: keys,
    datasets: [
      {
        label: "Total spent",
        data: values,
        backgroundColor: [
          "#7C87EB",
          "#DE81DC",
          "#FF84B5",
          "#FFA088",
          "#FFCC69",
          "#F9F871",
        ],
        borderColor: ["white"],
        borderWidth: 0.5,
      },
    ],
  };

  return (
    <DoughnutWrapper>
      {values.length === 0 ? (
        <NoDataWarning>
          There is no data to display here. Try changing the time span or
          accounts.
        </NoDataWarning>
      ) : (
        <Doughnut data={data} options={options} />
      )}
    </DoughnutWrapper>
  );
};

export default PieChart;
