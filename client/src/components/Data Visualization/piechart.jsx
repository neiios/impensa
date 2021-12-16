import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { PieChartWrapper } from "./style";
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

const PieChart = ({ expenses }) => {
  let add = 0;
  let newobj = expenses.slice(Math.max(expenses.length - expenses.length, 0));
  const data = {
    labels: newobj.map((expense) => expense.expense_category),
    //backgroundColor: ['rgba(255,0,0,1)'],
    //lineTension: 1,
    datasets: [
      {
        label: "# of Votes",
        data: newobj.map((expense) => parseFloat(expense.expense_amount)),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <PieChartWrapper>
      <Doughnut data={data} options={options} />
    </PieChartWrapper>
  );
};

export default PieChart;
