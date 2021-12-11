import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import styled from "styled-components";

const H5 = styled.h5``

const GeneralCategories = [
  { value: "entertainment", label: "entertainment", color: "blue" },
  { value: "investment", label: "investment", color: "red" },
  { value: "subscription", label: "subscription", color: "#36B37E" },
  { value: "travelling", label: "travelling", color: "#00875A" },
];

const ExactLabel = [
  { value: "netflix", label: "netflix", color: "blue" },
  { value: "youtube Premium", label: "youtube premium", color: "red" },
  { value: "spotify", label: "spotify", color: "#36B37E" },
  { value: "accomodation", label: "accomodation", color: "#00875A" },
  { value: "primeVideo", label: "prime Video", color: "#253858" },
  { value: "transport", label: "transport", color: "#666666" },
  { value: "groceries", label: "groceries", color: "#666666" },
];

const Categories = ({ setForm, formData, navigation }) => {
  // set value for default selection
  const [selectedValue, setSelectedValue] = useState([]);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  const { next } = navigation;

  return (
    <>
    <H5>Choose category</H5>
      <CreatableSelect
        //value={colourOptions.filter((obj) => selectedValue.includes(obj.value))}
        isMulti
     //   onChange={handleChange}
        options={GeneralCategories}
        className="basic-multi-select"
        classNamePrefix="select"
      />
          <H5>Spent on</H5>
            <CreatableSelect
        //value={colourOptions.filter((obj) => selectedValue.includes(obj.value))}
        isMulti
     //   onChange={handleChange}
        options={ExactLabel}
        className="basic-multi-select"
        classNamePrefix="select"
      />
      <div>
        <button onClick={next}>Next</button>
      </div>

      <div>
        <b>Selected Value: </b> {JSON.stringify(selectedValue, null, 2)}
      </div>
    </>
  );
};

export default Categories;
