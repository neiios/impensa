import React, { useState } from "react";
import {
  ArchiveContainer,
  H3,
  HeaderContainer,
  Icon,
  ExpenseCategoryCentered,
  IconContainer,
} from "./style";
import { Table, Colgroup, Col, Thead, Tr, Th, Tbody, Td } from "./style";
import moment from "moment";
import ExcelExport from "./excelExport";
import ModalService from "../../components/Modal/ModalService";
import NewExpenseEdit from "../../components/Modal/NewExpenseEdit.js";
// Wraps Sidebar Nav and Main-Conent

const Archive = ({ expenses, currency }) => {
  const [sort, setSort] = useState(false);
  const [sortedExpenses, setSortedExpenses] = useState([...expenses].reverse());

  async function deleteExpense(expense_id) {
    try {
      console.log(`Expense id is ${expense_id}`);
      const res = await fetch(
        `http://localhost:5000/dashboard/expense/${expense_id}`,
        {
          method: "DELETE",
          headers: { jwtToken: localStorage.token },
        }
      );

      window.location = "/dashboard/archive";
      console.log(`Expense was deleted! Response is ${res}`);
    } catch (err) {
      console.error(err.message);
    }
  }

  const addModal = () => {
    ModalService.open(NewExpenseEdit);
  };

  async function sortElements() {
    try {
      sort
        ? setSortedExpenses(expenses)
        : setSortedExpenses([...expenses].reverse());
      setSort(!sort);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <ArchiveContainer>
      <HeaderContainer>
        <H3>Archive</H3>
        <ExcelExport expenses={expenses} />
      </HeaderContainer>
      <Table>
        <Colgroup>
          <Col style={{ width: "5%", minWidth: "auto" }} />
          <Col style={{ width: "10%", minWidth: "auto" }} />
          <Col style={{ width: "50%", minWidth: "auto" }} />
          <Col style={{ width: "17%", minWidth: "auto" }} />
          <Col style={{ width: "15%", minWidth: "auto" }} />
        </Colgroup>
        <Thead>
          <Tr>
            <Th>Modify</Th>
            <Th>Amount</Th>
            <Th>Description</Th>
            <Th>Category</Th>
            <Th onClick={() => sortElements()}>
              Date <Icon className="fas fa-sort"></Icon>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedExpenses.map((expense) => (
            <Tr key={expense.expense_id}>
              <Td>
                <IconContainer>
                  <Icon
                    className="far fa-edit"
                    onClick={() => addModal(expense.expense_id)}
                  />
                  <Icon
                    className="far fa-trash-alt"
                    onClick={() => deleteExpense(expense.expense_id)}
                  />
                </IconContainer>
              </Td>
              <Td>{`${currency} ${expense.expense_amount}`}</Td>
              <Td>
                {expense.expense_description.length === 0
                  ? "No description provided"
                  : expense.expense_description}
              </Td>
              <Td>
                <ExpenseCategoryCentered>
                  {expense.expense_category}
                </ExpenseCategoryCentered>
              </Td>
              <Td>{moment.utc(expense.expense_date).format("MMM Do, YYYY")}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </ArchiveContainer>
  );
};

export default Archive;
