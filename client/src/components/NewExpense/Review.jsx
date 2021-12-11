import React from "react";
import {Wrapper, H3} from "./style.jsx"
const Review = ({formData, navigation }) => {
  const { zip } = formData;
  const { go } = navigation;

  return (
    <Wrapper>
      <H3>Review your data</H3>
        Categorie(s) selected:
        <button onClick={() => go("categories")}>Edit</button>
        Spent on:
        <button onClick={() => go("priceselect")}>Edit</button>
        Amount: {`${zip}`}
        <button onClick={() => go("submit")}>Submit</button>
    </Wrapper>
  );
};

export default Review;
