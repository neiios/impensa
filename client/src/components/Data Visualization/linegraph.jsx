import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
import styled from "styled-components";

export const GraphWrapper = styled.div`
  position: absolute;
  width: 90%;
  height: 400px !important;
`;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const LineGraph = ({ expenses }) => {
  const labels = expenses.map((expense) => expense.expense_category);
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: parseFloat(expenses.map((expense) => expense.expense_amount)),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <GraphWrapper>
      <Line options={options} data={data} />;
    </GraphWrapper>
  );
};

export default LineGraph;
