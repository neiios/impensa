import React, { useState } from "react";
// components
import { WideButton, ModifiedLink } from "../../components/Button/index.js";
// styles
import {
  Wrapper,
  Input,
  Heading,
  StringContainer,
  InputWrapper,
  Form,
} from "../SignUp/Styles.js";

// add location to identify currency
const SignIn = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch("http://localhost:5000/auth/login", {
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
        <Heading>Sign in to your account</Heading>
        <InputWrapper>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </InputWrapper>
        <WideButton style={{ margin: "auto" }}>Continue</WideButton>
        <StringContainer primary>
          Don't have an account?
          <ModifiedLink style={{ color: "#635BFF" }} to="/signup">
            Sign up
          </ModifiedLink>
        </StringContainer>
      </Form>
    </Wrapper>
  );
};

export default SignIn;
