import React, { useState, useEffect } from "react";
import "../../theme/Modal.css";
import Modal from "react-modal";
import {
  CloseModal,
  Headline,
  Heading,
  SaveButton,
  H5,
  TextArea,
  Wrapper,
  ButtonsContainer,
  DeleteButton,
} from "./styles";
import ItemForm from "../itemForm";
import { toast } from "react-toastify";
import Select from "react-select";
import theme from "../../theme/Index";
import chroma from "chroma-js";
Modal.setAppElement("#root");

export const colourStyles = {
  control: (base) => ({
    ...base,
    border: "none",
    boxShadow: "rgba(3, 102, 214, 0.1) 0px 0px 0px 1px",
    transition: "all 0.3s ease-out",
    "&:hover": {
      boxShadow: theme.bg.semiBlue + "0px 0px 0px 3px",
    },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(theme.bg.secondary);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled ? "#ccc" : isSelected,

      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: theme.bg.lightestBlue,
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: theme.bg.secondary,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: "#5865F2",
    ":hover": {
      backgroundColor: theme.bg.semiBlue,
      color: "white",
    },
  }),
};

const ExpenseModal = ({ setExpenses, categories, expense, children }) => {
  const [description, setDescription] = useState(expense?.description || "");
  const [amount, setAmount] = useState(expense?.amount || "");
  const [date, setDate] = useState(
    expense ? new Date(expense.spentAt).toISOString().substring(0, 16) : "",
  );
  const [category, setCategory] = useState(
    expense
      ? { id: expense.expenseCategory.id, name: expense.expenseCategory.name }
      : null,
  );
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (expense) {
      // If editing an expense, prefill the state
      setDescription(expense.description);
      setAmount(expense.amount);
      setDate(new Date(expense.spentAt).toISOString().substring(0, 16));
      setCategory({
        id: expense.expenseCategory.id,
        label: expense.expenseCategory.name,
      });
    }
  }, [expense]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
    } catch (err) {
      toast.error(err.message);
      console.error(err.message);
    }
  }

  async function onCancelClick() {
    if (expense) {
      onDeleteExpense(expense.id);
    }
    closeModal();
  }

  async function onSubmitForm(e) {
    e.preventDefault();
    const formattedDate = new Date(date).toISOString();
    const body = {
      amount: amount,
      expenseCategoryId: category.id,
      description: description,
      spentAt: formattedDate,
    };
    try {
      const endpoint = expense
        ? `/api/v1/expenses/${expense.id}`
        : "/api/v1/expenses";
      const response = await fetch(endpoint, {
        method: expense ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const responseData = await response.json();
        if (expense) {
          setExpenses((prevExpenses) =>
            prevExpenses.map((e) => (e.id === expense.id ? responseData : e)),
          );
        } else {
          setExpenses((prevExpenses) => [...prevExpenses, responseData]);
        }
        closeModal();
        toast.success(`Expense ${expense ? "updated" : "added"} successfully!`);
      } else {
        toast.error(`Failed to ${expense ? "update" : "add"} expense.`);
      }
    } catch (err) {
      toast.error(err.message);
    }
  }

  const formattedCategories = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  return (
    <>
      <div onClick={openModal}>{children}</div>
      <Modal
        className={{
          base: "modal-base",
          afterOpen: "modal-base_after-open",
          beforeClose: "modal-base_before-close",
        }}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-base_after-open",
          beforeClose: "overlay-base_before-close",
        }}
        closeTimeoutMS={200}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <Wrapper onSubmit={onSubmitForm}>
          <Heading>
            <Headline onClick={onCancelClick}>
              {expense ? "Edit expense" : "Add Expense"}
            </Headline>
            <CloseModal
              onClick={closeModal}
              className="fa-solid fa-xmark fa-xl"
            />
          </Heading>

          <H5>Choose category</H5>

          <Select
            styles={colourStyles}
            defaultValue={
              expense && {
                value: expense.expenseCategory.id,
                label: expense.expenseCategory.name,
              }
            }
            onChange={(selectedOption) =>
              setCategory({
                id: selectedOption.value,
                name: selectedOption.label,
              })
            }
            options={formattedCategories}
            className="basic-multi-select"
            classNamePrefix="select"
            required
          />

          <H5>Description</H5>
          <TextArea
            placeholder="You can put details about your expense here"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <H5>Amount</H5>
          <ItemForm
            position="column"
            required
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <H5>Date</H5>
          <ItemForm
            position="column"
            required
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <ButtonsContainer>
            <DeleteButton onClick={onCancelClick} type="button">
              {expense ? "Remove" : "Cancel"}
            </DeleteButton>
            <SaveButton>{expense ? "Save" : "Add"}</SaveButton>
          </ButtonsContainer>
        </Wrapper>
      </Modal>
    </>
  );
};

export default ExpenseModal;
