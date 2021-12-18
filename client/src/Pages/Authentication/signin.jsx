import React, { useState } from "react";
import { WideButton, ModifiedLink } from "../../components/Button/index.jsx";
import ItemForm from "../../components/ItemForm.jsx";
// styles
import { Wrapper, Heading, Form, TextContainer } from "./style";
// add location to identify currency
const SignIn = ({ setAuth }) => {
  document.title = "Impensa - login";
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
      const response = await fetch("/auth/login", {
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
        <ItemForm
          position="column"
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
        />
        <ItemForm
          position="column"
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
        />
        <WideButton style={{ margin: "auto" }}>Continue</WideButton>
        <TextContainer>
          Don't have an account?
          <ModifiedLink style={{ color: "#635BFF" }} to="/signup">
            Sign up
          </ModifiedLink>
        </TextContainer>
      </Form>
    </Wrapper>
  );
};

export default SignIn;
