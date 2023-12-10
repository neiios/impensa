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
  const [selectedExpense, setSelectedExpense] = useState({});

  async function onDeleteExpense(id) {
    try {
      const response = await fetch(`/api/v1/expenses/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setExpenses((prevExpenses) =>
          prevExpenses.filter((expense) => expense.id !== id),
        );
        toast.success("Expense has been deleted successfully!");
      } else {
        const errorData = await response.json();
        toast.error(`Error deleting expense: ${errorData.message}`);
      }
      setDisabled(!disabled);
    } catch (err) {
      toast.error(err.message);
      console.error(err.message);
    }
  }

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

  async function onSubmitEditForm(e, selectedExpense) {
    e.preventDefault();

    try {
      const body = {
        amount: selectedExpense.amount,
        description: selectedExpense.description,
        expenseCategoryId: selectedExpense.expenseCategory.id,
      };
      console.log(body);
      const response = await fetch(`/api/v1/expenses/${selectedExpense.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      sortedExpenses.forEach((expense) => {
        if (expense.id === selectedExpense.id) {
          expense.amount = selectedExpense.amount;
          expense.description = selectedExpense.description;
          expense.expenseCategory.name = selectedExpense.expenseCategory.name;
        }
      });

      setDisabled(!disabled);
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