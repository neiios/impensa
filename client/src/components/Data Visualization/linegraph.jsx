import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import theme from "../../theme/Index";
import moment from "moment";
import { GraphWrapper, H3, TextContainer } from "./style";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

let newDate = new Date();
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

let currentUserDate = `${month}/${date}/${year}`;

export const options = {
  tooltips: {
    mode: "index",
    intersect: false,
  },
  hover: {
    mode: "index",
    intersect: true,
  },
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: false,
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      tooltips: {
        mode: "label", // or 'x-axis'
      },
      ticks: {
        autoSkip: false,
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        autoSkip: true,
        display: false,
      },
    },
  },
};

const LineGraph = ({ expenses, currency }) => {
  let numOfExpensesToday = 0,
    spentInTotal = 0,
    spentToday = 0;

  expenses.map((expense) =>
    moment.utc(expense.expense_date).format("MM/DD/Y") === currentUserDate
      ? numOfExpensesToday++
      : null
  );

  let objToday = expenses.slice(expenses.length - numOfExpensesToday);

  objToday.map((expense) => (spentToday += parseFloat(expense.expense_amount)));

  let labels = expenses.map((expense) =>
    moment.utc(expense.expense_date).format("MM/DD/Y")
  );

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Total spent",
        data: expenses.map(
          (expense) => (spentInTotal += parseFloat(expense.expense_amount))
        ),
        borderColor: theme.bg.secondary,
        backgroundColor: theme.bg.semiBlue,
        radius: 5,
        tension: 0.3,
      },
    ],
  };
  return (
    <>
      <TextContainer>
        <H3>{` ${currency} ${spentInTotal.toFixed(2)}`}</H3>
        TOTAL SPENT
      </TextContainer>
      <TextContainer>
        <H3>{` ${currency} ${spentToday.toFixed(2)}`}</H3>
        TODAY SPENT as for {currentUserDate}
      </TextContainer>
      <GraphWrapper>
        <Line options={options} data={data} />
      </GraphWrapper>
    </>
  );
};

export default LineGraph;
