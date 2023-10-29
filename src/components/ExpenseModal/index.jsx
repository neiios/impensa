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

const ExpenseModal = ({ setExpenses, categories, children }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(undefined);
  const [category, setCategory] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function onSubmitForm(e) {
    e.preventDefault();
    try {
      const body = {
        amount,
        expenseCategoryId: category.id,
        description,
      };

      const response = await fetch("/api/v1/expenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
        body: JSON.stringify(body),
      });

      const parseData = await response.json();
      setExpenses((prevExpenses) => [...prevExpenses, parseData]);

      setDescription("");
      setAmount(undefined);
      setCategory([]);

      toast.success("New expense has been added successfully!");
    } catch (err) {
      toast.error(err.message);
      console.error(err.message);
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
            <Headline>Add Expense</Headline>
            <CloseModal
              onClick={closeModal}
              className="fa-solid fa-xmark fa-xl"
            />
          </Heading>

          <H5>Choose category</H5>

          <Select
            styles={colourStyles}
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

          <SaveButton onClick={closeModal}>Add Expense</SaveButton>
        </Wrapper>
      </Modal>
    </>
  );
};

export default ExpenseModal;
