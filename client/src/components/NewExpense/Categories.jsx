import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import theme from "../../theme/Index";
import {
  Wrapper,
  H5,
  ButtonContainer,
  HR,
  Ul,
  Li,
  InputAmount,
  HeadingContainer,
  PriceSelect,
} from "./style";
import { Button } from "../Button";
import chroma from "chroma-js";

const colourStyles: StylesConfig<ColourOption, true> = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
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

const GeneralCategories = [
  { value: "entertainment", label: "entertainment", color: "blue" },
  { value: "investments", label: "investments", color: "red" },
  { value: "subscriptions", label: "subscriptions", color: "#36B37E" },
  { value: "travelling", label: "travelling", color: "#00875A" },
];

// const ExactLabel = [
//   { value: "netflix", label: "netflix", color: "blue" },
//   { value: "youtube Premium", label: "youtube premium", color: "red" },
//   { value: "spotify", label: "spotify", color: "#36B37E" },
//   { value: "accomodation", label: "accomodation", color: "#00875A" },
//   { value: "primeVideo", label: "prime video", color: "#253858" },
//   { value: "transport", label: "transport", color: "#666666" },
//   { value: "groceries", label: "groceries", color: "#666666" },
//   { value: "cinema", label: "cinema", color: "#666666" },
//   { value: "food delivery", label: "food delivery", color: "#666666" },
// ];

const Categories = () => {
  // set value for default selection
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(undefined);
  const [category, setCategory] = useState([]);

  async function onSubmitForm(e) {
    e.preventDefault();
    try {
      const body = { description, amount, category };
      const response = await fetch("http://localhost:5000/dashboard/expense", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          jwtToken: localStorage.token,
        },
        body: JSON.stringify(body),
      });

      console.log(response);
      window.location = "/dashboard";
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <form onSubmit={onSubmitForm}>
      <H5>Choose category</H5>
      <CreatableSelect
        onChange={(e) => setCategory(e.value)}
        options={GeneralCategories}
        className="basic-multi-select"
        classNamePrefix="select"
        styles={colourStyles}
      />
      {console.log(category)}
      <H5>Description</H5>
      <input
        required
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <H5>Amount</H5>
      <input
        required
        type="number"
        min="0.01"
        step="0.01"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      {/* this is just insane */}
      <ButtonContainer>
        <Button>Submit</Button>
      </ButtonContainer>
    </form>
  );
};

export default Categories;
