import React from "react";
import ItemForm from "../ItemForm.jsx"
import {ButtonContainer, Wrapper, H3, InputAmount, Label} from "./style.jsx"
import { Button } from "../Button";
const PriceSelect = ({ setForm, navigation }) => {
  const { previous, next } = navigation;

  return (
    <Wrapper>
      <H3>Enter the amount</H3>
      <Label>Label#1</Label>
      <InputAmount name="zip" onChange={setForm} />
        <ButtonContainer>
        <Button onClick={previous}>Previous</Button>
        <Button onClick={next}>Next</Button>
        </ButtonContainer>
    </Wrapper>
  );
};

export default PriceSelect;
