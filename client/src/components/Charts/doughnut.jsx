import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { DoughnutWrapper } from "./style";
import moment from "moment";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  maintainAspectRatio: true,
  responsive: true,
  plugins: {
    legend: false,
  },
};

let selectedCategories = [],
  selectedAmounts = [];

const PieChart = ({ expenses, currentMonth }) => {
  // You should filter expenses you get here
  // ----- code
  // ----- code

  var expensesMerged = expenses.reduce((object, item) => {
    var category = item.expense_category;
    var amount = item.expense_amount;

    if (!object.hasOwnProperty(category)) {
      object[category] = 0;
    }

    object[category] += parseFloat(amount);
    return object;
  }, {});

  // -------------------
  let newobj = expenses.slice(Math.max(expenses.length - expenses, 0));

  newobj.map((expense) =>
    moment.utc(expense.expense_date).format("MMMM YYYY") === currentMonth
      ? selectedCategories.push(expense.expense_category) &&
        selectedAmounts.push(expense.expense_amount)
      : null
  );

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
      <Doughnut data={data} options={options} />
    </DoughnutWrapper>
  );
};

export default PieChart;
