import Reac, { useState } from "react";
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
import theme from "../../theme/Index";
import styled from "styled-components";
import NumberFormat from "react-number-format";
import moment from "moment";
export const GraphWrapper = styled.div`
  position: absolute;
  width: 90%;
  height: 400px !important;
`;

const states = [
  ["NSW", "New South Wales"],
  ["VIC", "Victoria"],
  ["WA", "Western Australia"],
];

const StateDrop = ({ label, ...others }) => (
  <>
    <label>{label}</label>
    <select {...others}>
      {states.map(([value, name]) => (
        <option value={value}>{name}</option>
      ))}
    </select>
  </>
);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

let newDate = new Date();
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

let currentUserDate = `${month}/${date - 1}/${year}`;
console.log(currentUserDate);
//12/11/2021

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: false,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        autoSkip: true,
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
  let total = expenses.length;
  const getInitialState = () => {
    const value = "10";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  let i = 0;
  let add = 0;
  let newobj = expenses.slice(Math.max(expenses.length - expenses.length, 0));
  newobj.map((expense) =>
    moment.utc(expense.expense_date).format("MM/DD/Y") >=
    `${month}/${date - value}/${year}`
      ? i++
      : i
  );

  newobj = expenses.slice(Math.max(expenses.length - i, 0));
  let labels = newobj.map((expense) =>
    moment.utc(expense.expense_date).format("MM/DD/Y")
  );

  console.log(i);
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: newobj.map(
          (expense) => (add += parseFloat(expense.expense_amount.substring(1)))
        ),
        borderColor: theme.bg.secondary,
        backgroundColor: theme.bg.secondary,
        radius: 0,
        tension: 0.5,
      },
    ],
  };
  return (
    <GraphWrapper>
      <select value={value} onChange={handleChange}>
        <option value="1">1</option>
        <option value="2" selected>
          2
        </option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value={total}>all time</option>
      </select>
      <p>{`Your expenses for the past ${value} expenses`}</p>
      Total spent: {add}
      <Line options={options} data={data} />
    </GraphWrapper>
  );
};

export default LineGraph;

/*
  for (let m = 0; m < 19; m++) {
    if (
      newValue ===
      newobj.map((expense) =>
        moment.utc(expense.expense_date).format("MM/DD/Y")
      )
    ) {
      newobj = expenses.slice(Math.max(expenses.length - m, 0));
    } else {
      continue;
    }
    console.log(m);
  }
  */
