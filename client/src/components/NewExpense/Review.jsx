import React from "react";

const Review = ({formData, navigation }) => {
  const { zip } = formData;
  const { go } = navigation;

  return (
    <div className="form">
      <h3>Review your data</h3>
      <h4>
        Name
        <button onClick={() => go("categories")}>Edit</button>
        Address
        <button onClick={() => go("priceselect")}>Edit</button>
      </h4>
      <div>
        <br />
        Amount: {`${zip}`}
      </div>
      <div>
        <button onClick={() => go("submit")}>Submit</button>
      </div>
    </div>
  );
};

export default Review;
