import React, { useState } from "react";
import {
  Wrapper,
  Form,
  Heading,
  TextContainer,
  SelectContainer,
  InputRow,
} from "./style";
import { WideButton, ModifiedLink } from "../../components/Button/index.jsx";
import ItemForm from "../../components/ItemForm.jsx";
import { currency_list } from "../../data/currency-list.js";
import Select from "react-select";
import { InputLabel } from "../../components/ItemForm.jsx";
import { colourStyles } from "../../components/NewExpense/Categories";
import { useForm } from "react-hook-form";
// add location to identify currency
const SignUp = ({ setAuth }) => {
  document.title = "Impensa - register";

  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [currency, setCurrency] = useState("");
  const { email, name, password } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, name, password, currency };
      const response = await fetch("/auth/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
      } else {
        setAuth(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmitForm}>
        <Heading>Create your Impensa account</Heading>
        <InputRow>
          <ItemForm
            maxLength="12"
            label="Name"
            position="column"
            type="text"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
          <SelectContainer>
            <InputLabel>Currency</InputLabel>
            <Select
              styles={colourStyles}
              onChange={(e) => setCurrency(e.value)}
              options={currency_list}
              className="basic-multi-select"
              classNamePrefix="select"
              required
            />
          </SelectContainer>
        </InputRow>
        <ItemForm
          maxLength="25"
          position="column"
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={(e) => onChange(e)}
        />
        <ItemForm
          position="column"
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={(e) => onChange(e)}
        />
        <WideButton style={{ margin: "auto" }}>Create account</WideButton>
        <TextContainer>
          Have an account?
          <ModifiedLink style={{ color: "#635BFF" }} to="/signin">
            Sign in
          </ModifiedLink>
        </TextContainer>
      </Form>
    </Wrapper>
  );
};

export default SignUp;
