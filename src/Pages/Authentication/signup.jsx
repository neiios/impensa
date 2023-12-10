import React, { useState } from "react";
import {
  Wrapper,
  Form,
  Heading,
  TextContainer,
  SelectContainer,
  InputRow,
  SigninContainer,
} from "./style";
import { StyledLink } from "../../components/Button/style";
import { PrimaryOutlineButton } from "../../components/Button/index.jsx";
import ItemForm from "../../components/itemForm.jsx";
import { currency_list } from "../../data/currency-list.js";
import Select from "react-select";
import { InputLabel } from "../../components/itemForm.jsx";
import { colourStyles } from "../../components/NewExpenseModal/newExpense";
import { toast } from "react-toastify";
import { LogoImg } from "../../components/Logo";
// add location to identify currency
const SignUp = ({ setAuth }) => {
  document.title = "Impensa: Register";

  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [currency, setCurrency] = useState("");
  const { email, username, password } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, username, password, currency };
      const response = await fetch("/api/v1/auth/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      if (response.status === 200) {
        setAuth(true);
        toast.success("Registered successfully!");
      } else {
        setAuth(false);
        toast.error("User already exists!");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Wrapper>
      <LogoImg />
      <Heading>Create your Impensa account</Heading>
      <SigninContainer>
        <Form onSubmit={onSubmitForm}>
          <ItemForm
            maxLength="12"
            label="Name"
            position="column"
            type="text"
            name="username"
            value={username}
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
          <PrimaryOutlineButton style={{ margin: "auto" }}>
            Create an account
          </PrimaryOutlineButton>
          <TextContainer>
            Already have an account?
            <StyledLink style={{ color: "#635BFF" }} to="/signin">
              Sign in
            </StyledLink>
          </TextContainer>
        </Form>
      </SigninContainer>
    </Wrapper>
  );
};

export default SignUp;
