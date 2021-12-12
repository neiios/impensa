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
  { value: "investments", label: "investment", color: "red" },
  { value: "subscriptions", label: "subscription", color: "#36B37E" },
  { value: "travelling", label: "travelling", color: "#00875A" },
];

const ExactLabel = [
  { value: "netflix", label: "netflix", color: "blue" },
  { value: "youtube Premium", label: "youtube premium", color: "red" },
  { value: "spotify", label: "spotify", color: "#36B37E" },
  { value: "accomodation", label: "accomodation", color: "#00875A" },
  { value: "primeVideo", label: "prime video", color: "#253858" },
  { value: "transport", label: "transport", color: "#666666" },
  { value: "groceries", label: "groceries", color: "#666666" },
  { value: "cinema", label: "cinema", color: "#666666" },
  { value: "food delivery", label: "food delivery", color: "#666666" },
];

const Categories = () => {
  // set value for default selection
  const [selectedValue, setSelectedValue] = useState([]);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.label) : []);
  };

  return (
    <Wrapper>
      <H5>Choose category</H5>
      <CreatableSelect
        isMulti
        options={GeneralCategories}
        className="basic-multi-select"
        classNamePrefix="select"
        styles={colourStyles}
      />
      <H5>Spent on</H5>
      <CreatableSelect
        onChange={handleChange}
        isMulti
        options={ExactLabel}
        className="basic-multi-select"
        classNamePrefix="select"
        styles={colourStyles}
      />
      <HR />
      <PriceSelect>
        <HeadingContainer>
          <H5>Spendings</H5>
          <H5>Amount</H5>
        </HeadingContainer>
        {
          <Ul>
            {" "}
            {Object.keys(selectedValue).map((keyName, i) => (
              <Li>
                {selectedValue[keyName]}
                <InputAmount type="number" min="0" required />{" "}
              </Li>
            ))}
          </Ul>
        }
      </PriceSelect>
      <ButtonContainer>
        <Button>Save</Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Categories;
