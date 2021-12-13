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
import theme from "../../theme/Index";
import moment from "moment";
import { GraphWrapper, H4, H6, H3, TextContainer } from "./style";

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
      tooltips: {
        mode: "label", // or 'x-axis'
      },
      ticks: {
        autoSkip: true,
        display: true,
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
  let value = expenses.length,
    i = 0,
    add = 0,
    addToday = 0;
  console.log(expenses);
  let newobj = expenses.slice(Math.max(expenses.length - expenses.length, 0));
  newobj.map((expense) =>
    moment.utc(expense.expense_date).format("MM/DD/Y") ===
    `${month}/${date - 1}/${year}`
      ? i++
      : i
  );

  let today = expenses.slice(Math.max(expenses.length - i, 0));

  let todaySpent = today.map(
    (expense) => (addToday += parseFloat(expense.expense_amount))
  );
  console.log(todaySpent);
  newobj = expenses.slice(Math.max(expenses.length - value, 0));

  let labels = newobj.map((expense) =>
    moment.utc(expense.expense_date).format("MM/DD/Y")
  );
  let radiusValue;
  value === 1 ? (radiusValue = 5) : (radiusValue = 0);
  const data = {
    labels,
    datasets: [
      {
        label: "Amount",
        data: newobj.map(
          (expense) => (add += parseFloat(expense.expense_amount))
        ),
        borderColor: theme.bg.secondary,
        backgroundColor: theme.bg.secondary,
        radius: radiusValue,
        tension: 0.3,
      },
    ],
  };
  //value = how many expenses
  return (
    <>
      <TextContainer>
        <H3>{add}</H3> total
      </TextContainer>
      <TextContainer>
        <H3>{addToday}</H3> today
      </TextContainer>
      <GraphWrapper>
        <Line options={options} data={data} />
      </GraphWrapper>
    </>
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
