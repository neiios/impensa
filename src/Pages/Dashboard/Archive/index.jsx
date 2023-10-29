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

const Archive = ({ expenses, currency, setExpenses }) => {
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
          Authorization: `Bearer ${localStorage.token}`,
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

  async function makeExpenseEditable(expense) {
    try {
      setSelectedExpense(expense);
      setDisabled(!disabled);
    } catch (err) {
      console.error(err.message);
    }
  }

  async function onSubmitEditForm(e) {
    e.preventDefault();
    console.log(e);
    try {
      const body = selectedExpense;
      const response = await fetch(`/api/v1/expenses/${selectedExpense.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
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

  const updateField = (e) => {
    setSelectedExpense((prevSelectedExpense) => ({
      ...prevSelectedExpense,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    setSortedExpenses(
      sort
        ? [...expenses].sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
          )
        : [...expenses].sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
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
          {disabled ? (
            sortedExpenses.map((expense) => (
              <Tr key={expense.id}>
                <Td data-label="Modify">
                  <IconContainer>
                    <Icon
                      className="far fa-edit"
                      onClick={() => makeExpenseEditable(expense)}
                    />
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
                  {moment.utc(expense.createdAt).format("MMM Do, YYYY")}
                </Td>
              </Tr>
            ))
          ) : (
            <Tr key={selectedExpense.id}>
              <Td data-label="Modify">
                <IconContainer>
                  <Icon
                    className="fas fa-times"
                    onClick={() => setDisabled(!disabled)}
                  />
                  <Icon
                    className="fas fa-check"
                    onClick={(e) => onSubmitEditForm(e, selectedExpense)}
                  />
                  <Icon
                    className="far fa-trash-alt"
                    onClick={() => onDeleteExpense(selectedExpense.id)}
                  />
                </IconContainer>
              </Td>
              <Td data-label="Amount">
                <Input
                  required
                  type="number"
                  name="amount"
                  min="0.01"
                  step="0.01"
                  value={selectedExpense.amount}
                  onChange={(e) => updateField(e)}
                />
              </Td>
              <Td data-label="Description">
                <Input
                  required
                  name="description"
                  type="text"
                  value={selectedExpense.description}
                  onChange={(e) => updateField(e)}
                />
              </Td>
              <Td data-label="Category">
                <Input
                  required
                  name="category.name"
                  type="text"
                  value={selectedExpense.expenseCategory.name}
                  onChange={(e) => updateField(e)}
                />
              </Td>
              <Td data-label="Date">
                {moment.utc(selectedExpense.createdAt).format("MMM Do, YYYY")}
              </Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </ArchiveContainer>
  );
};
export default Archive;
