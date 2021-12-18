import React, { useState } from "react";
import Select from "react-select/creatable";
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
  TextArea,
} from "./style";
import { Button } from "../Button";
import chroma from "chroma-js";
import ItemForm from "../ItemForm";
const colourStyles: StylesConfig<ColourOption, true> = {
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

export const GeneralCategories = [
  { value: "Audible", label: "Audible" },
  { value: "Netflix", label: "Netflix" },
  { value: "Spotify", label: "Spotify" },
  { value: "Youtube premium", label: "Youtube premium" },
  { value: "HBO Max", label: "HBO Max" },
  { value: "Disney+", label: "Disney+" },
  { value: "Tickets", label: "Tickets" },
  { value: "Travelling", label: "Travelling" },
  { value: "Transport", label: "Transport" },
  { value: "Health", label: "Health" },
  { value: "Delivery", label: "Delivery" },
  { value: "Groceries", label: "Groceries" },
  { value: "Accomodation", label: "Accomodation" },
];

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
      window.location = "/dashboard/overview";
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Wrapper onSubmit={onSubmitForm}>
      <H5>Choose category</H5>
      <Select
        defaultValue={GeneralCategories[0]}
        onChange={(e) => setCategory(e.value)}
        options={GeneralCategories}
        className="basic-multi-select"
        classNamePrefix="select"
        styles={colourStyles}
      />
      {console.log(category)}
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
        <Button>Submit</Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Categories;
