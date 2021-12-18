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
//12/11/2021
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
  console.log(expenses);
  let i = 0,
    add = 0,
    addToday = 0;

  let newobj = expenses.slice(Math.max(expenses.length - expenses.length, 0));

  console.log(expenses);

  newobj.map((expense) =>
    moment.utc(expense.expense_date).format("MM/DD/Y") === currentUserDate
      ? i++
      : i
  );

  // 4 - 3, 0
  // expenses.slice(1) 1000 432 500 312 removes 1000 /// 432 500 312
  // 1 to remove
  console.log(expenses);

  // let today = expenses;
  // for (let index = 0; index < expenses.length - i; index++) {
  //   today.pop();
  // }

  // 4 - (4 - 3)
  let today = expenses.slice(expenses.length - i);

  console.log(today);
  console.log(expenses);

  let todaySpent = today.map(
    (expense) => (addToday += parseFloat(expense.expense_amount))
  );

  console.log(todaySpent);
  console.log(expenses);
  newobj = expenses.slice(Math.max(expenses.length - expenses.length, 0));
  console.log(expenses);
  console.log(newobj);

  let labels = expenses.map((expense) =>
    moment.utc(expense.expense_date).format("MM/DD/Y")
  );

  let radiusValue;

  expenses.length === 1 ? (radiusValue = 5) : (radiusValue = 5);

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Total spent",
        data: expenses.map(
          (expense) => (add += parseFloat(expense.expense_amount))
        ),
        borderColor: theme.bg.secondary,
        backgroundColor: theme.bg.semiBlue,
        radius: radiusValue,
        tension: 0.3,
      },
    ],
  };

  //expenses.length = how many expenses

  return (
    <>
      <TextContainer>
        <H3>{` ${currency} ${add.toFixed(2)}`}</H3>
        TOTAL SPENT
      </TextContainer>
      <TextContainer>
        <H3>{` ${currency} ${addToday.toFixed(2)}`}</H3>
        TODAY SPENT as for {currentUserDate}
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
