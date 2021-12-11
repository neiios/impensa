import React from "react";

import ItemForm from "../ItemForm.jsx"
const PriceSelect = ({ setForm, navigation }) => {
  const { previous, next } = navigation;

  return (
    <div className="form">
      <h3>Enter the amount</h3>
      <ItemForm label="Amount" name="zip" onChange={setForm} />
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default PriceSelect;
