import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import Categories from "./Categories";
import PriceSelect from "./PriceSelect";
import Review from "./Review";
import styled from "styled-components";
const steps = [
  { id: "categories" },
  { id: "priceselect" },
  { id: "review" },
  { id: "submit" },
];

const defaultData = {
  zip: "90505",
};



const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };
  switch (id) {
    case "categories":
      return <Categories {...props} />;
    case "priceselect":
      return <PriceSelect {...props} />;
    case "review":
      return <Review {...props} />;
    default:
      return null;
  }
};

export default MultiStepForm;
