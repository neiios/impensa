import React, { useState, useEffect } from "react";
import {
  ArchiveContainer,
  H3,
  HeaderContainer,
  Icon,
  IconContainer,
  Input,
} from "../style";
import { Table, Colgroup, Thead, Tr, Th, Tbody, Td } from "./style";
import moment from "moment";
import { toast } from "react-toastify";
import ExpenseModal from "../../../components/ExpenseModal";

const Archive = ({ expenses, currency, setExpenses, categories }) => {
  document.title = "Dashboard - Archive";

  const [sort, setSort] = useState(false);
  const [sortedExpenses, setSortedExpenses] = useState([...expenses].reverse());
  const [disabled, setDisabled] = useState(true);

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

  useEffect(() => {
    setSortedExpenses(
      sort
        ? [...expenses].sort(
            (a, b) => new Date(a.spentAt) - new Date(b.spentAt),
          )
        : [...expenses].sort(
            (a, b) => new Date(b.spentAt) - new Date(a.spentAt),
          ),
    );
  }, [expenses, sort]);

  return (
    <ArchiveContainer>
      <HeaderContainer>
        <H3>Archive</H3>
      </HeaderContainer>
      <Table>
        <Colgroup></Colgroup>
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
            <Tr key={expense.id}>
              <Td data-label="Modify">
                <IconContainer>
                  <ExpenseModal
                    setExpenses={setExpenses}
                    categories={categories}
                    expense={expense}
                  >
                    <Icon className="far fa-edit" />
                  </ExpenseModal>
                </IconContainer>
              </Td>
              <Td data-label="Amount">
                {`${currency} ${parseFloat(expense.amount).toFixed(2)}`}
              </Td>
              <Td data-label="Description">
                {expense.description.length === 0
                  ? "No description provided"
                  : expense.description}
              </Td>
              <Td data-label="Category">{expense.expenseCategory.name}</Td>
              <Td data-label="Date">
                {moment.utc(expense.spentAt).format("MMM Do, YYYY")}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </ArchiveContainer>
  );
};
export default Archive;
