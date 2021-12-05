import React, { useState } from "react";
import {
  Wrapper,
  Form,
  Input,
  Heading,
  StringContainer,
  InputWrapper,
} from "./Styles.js";
import { WideButton, ModifiedLink } from "../../components/Button/index.js";

// add location to identify currency
const SignUp = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    password: "",
  });

  const { email, name, password } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, name, password };
      const response = await fetch("http://localhost:5000/auth/register", {
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
        <InputWrapper>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => onChange(e)}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </InputWrapper>
        <WideButton style={{ margin: "auto" }}>Create account</WideButton>
        <StringContainer primary>
          Have an account?
          <ModifiedLink style={{ color: "#635BFF" }} to="/signin">
            Sign in
          </ModifiedLink>
        </StringContainer>
      </Form>
    </Wrapper>
  );
};

export default SignUp;
