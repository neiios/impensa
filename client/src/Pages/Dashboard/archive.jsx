import React, { useState } from "react";
import {
  ArchiveContainer,
  H3,
  HeaderContainer,
  Select,
  Option,
  Icon,
  ExpenseCategoryCentered,
  Container,
  AlterExpense,
  IconContainer,
} from "./style";
import { Table, Colgroup, Col, Thead, Tr, Th, Tbody, Td } from "./style";
import moment from "moment";
import ExcelExport from "./excelExport";
import { Button } from "../../components/Button";
import ModalService from "../../components/Modal/ModalService";
import NewExpenseEdit from "../../components/Modal/NewExpense.js";
// Wraps Sidebar Nav and Main-Conent

const Archive = ({ expenses }) => {
  const getInitialState = () => {
    const value = "10";
    return value;
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const [value, setValue] = useState(getInitialState);
  let newobj;
  value === "Most recent"
    ? (newobj = expenses.slice(Math.max(expenses.length - value, 0)).reverse())
    : (newobj = expenses.slice(Math.max(expenses.length - value, 0)));
  if (value === 1)
    newobj = expenses.slice(Math.max(expenses.length - value, 0));

  let a;
  const [showDescription, setShowDescription] = useState(false);
  const addModal = () => {
    ModalService.open(NewExpenseEdit);
  };
  return (
    <ArchiveContainer>
      <HeaderContainer>
        <H3>Archive</H3>
        <Button onClick={() => setShowDescription(!showDescription)}>
          Alter data
        </Button>
        <Select value={value} onChange={handleChange}>
          <Option value="Most recent">Recent first</Option>
          <Option value="Oldest">Oldest first</Option>
          <Option value="1">Last expense</Option>
        </Select>
        <ExcelExport expenses={expenses} />
      </HeaderContainer>
      <Table>
        <Colgroup>
          {showDescription && <Col style={{ width: "5%", minWidth: "auto" }} />}
          <Col style={{ width: "10%", minWidth: "auto" }} />
          <Col style={{ width: "50%", minWidth: "auto" }} />
          <Col style={{ width: "17%", minWidth: "auto" }} />
          <Col style={{ width: "15%", minWidth: "auto" }} />
        </Colgroup>
        <Thead>
          <Tr>
            {showDescription && <Th>Modify</Th>}
            <Th>Amount</Th>
            <Th>Description</Th>
            <Th>Category</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {newobj.map((expense) => (
            <Tr key={expense.expense_id}>
              {showDescription && (
                <Td>
                  <IconContainer>
                    <Icon className="far fa-trash-alt" />
                    <Icon className="far fa-edit" onClick={addModal} />
                  </IconContainer>
                </Td>
              )}
              <Td>{(a = expense.expense_amount)}</Td>
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

/*
 const newobj = expenses.slice(Math.max(expenses.length - 5, 0));

  return (
    <Container>
      <DataContainer>
        <Heading>Recently spent</Heading>
        {newobj.map((expense) => (
          <ExpenseString key={expense.expense_id}>
            <ColumnContainer>
              {expense.expense_amount}
              <ExpenseDate>
                {moment.utc(expense.expense_date).format("MMM Do, YYYY")}
              </ExpenseDate>
            </ColumnContainer>
            <ExpenseDescription>{expense.expense_category}</ExpenseDescription>
          </ExpenseString>
        ))}
        <ButtonContainer>
          <ToggleNewExpense />
        </ButtonContainer>
      </DataContainer>
      <DataContainer>
        <LineGraph expenses={expenses} />
      </DataContainer>
    </Container>
*/
