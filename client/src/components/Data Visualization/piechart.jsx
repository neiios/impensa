import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { PieChartWrapper } from "./style";
import moment from "moment";
ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: false,
  },
};
const countCategores = (uniqueCount) => {
  return uniqueCount.reduce(
    (cnt, cur) => ((cnt[cur] = cnt[cur] + 1 || 1), cnt),
    {}
  );
};
let selectedCategories = [],
  selectedAmounts = [],
  i = 0;
const PieChart = ({ expenses, currentMonth }) => {
  let newobj = expenses.slice(Math.max(0, 0));
  newobj.map((expense) =>
    moment.utc(expense.expense_date).format("MMMM YYYY") === currentMonth
      ? selectedCategories.push(expense.expense_category) &&
        selectedAmounts.push(expense.expense_amount)
      : null
  );
  console.log(selectedCategories);
  let add = 0;
  const data = {
    labels: selectedCategories,
    //backgroundColor: ['rgba(255,0,0,1)'],
    //lineTension: 1,
    datasets: [
      {
        label: "# of Votes",
        data: selectedAmounts,
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
    <PieChartWrapper>
      {currentMonth}
      <Doughnut data={data} options={options} />
    </PieChartWrapper>
  );
};

export default PieChart;
