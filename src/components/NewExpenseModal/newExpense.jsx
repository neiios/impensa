import React, { useState, useEffect } from "react";
import theme from "../../theme/Index";
import { Wrapper, H5, ButtonContainer, TextArea } from "./style";
import { Button } from "../Button";
import chroma from "chroma-js";
import ItemForm from "../itemForm";
import Select from "react-select";

import { toast } from "react-toastify";

export const colourStyles = {
  control: (base) => ({
    ...base,
    border: "none",
    boxShadow: "rgba(3, 102, 214, 0.1) 0px 0px 0px 1px",
    transition: "all 0.3s ease-out",
    "&:hover": {
      boxShadow: theme.bg.semiBlue + "0px 0px 0px 3px",
    },
    // This line disable the blue border
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

const Categories = () => {
  // set value for default selection
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(undefined);
  const [category, setCategory] = useState([]);
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    try {
      const res = await fetch("/api/v1/categories", {
        method: "GET",
      });

      const parseData = await res.json();
      const formattedCategories = parseData.map((cat) => ({
        label: cat.name,
        value: cat.id,
      }));
      console.log(formattedCategories);
      setCategories(formattedCategories);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

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
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      toast.success("New expense has been added successfully!");

      console.log(parseRes);
    } catch (err) {
      toast.error(err.message);
      console.error(err.message);
    }
  }

  return (
    <Wrapper onSubmit={onSubmitForm}>
      <H5>Choose category</H5>

      <Select
        styles={colourStyles}
        onChange={(e) => setCategory({ name: e.label, id: e.value })}
        options={categories}
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
      {/* this is just insane */}
      <ButtonContainer>
        <Button>Add Expense</Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Categories;
