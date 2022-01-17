import React, { useState } from "react";
import { PrimaryOutlineButton } from "../../components/Button/index.jsx";
import { StyledLink } from "../../components/Button/style.jsx";
import ItemForm from "../../components/itemForm.jsx";
import { Wrapper, Heading, Form, TextContainer } from "./style";

import { toast } from "react-toastify";

// add location to identify currency
const SignIn = ({ setAuth }) => {
  document.title = "Impensa: Sign In";
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
      const response = await fetch("/api/auth/login", {
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
        toast.success("Logged in successfully!");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmitForm}>
        <Heading>Sign in to your Impensa account</Heading>
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
        <PrimaryOutlineButton style={{ margin: "auto" }}>
          Continue
        </PrimaryOutlineButton>
        <TextContainer>
          Don't have an account?
          <StyledLink style={{ color: "#635BFF" }} to="/signup">
            Sign up
          </StyledLink>
        </TextContainer>
      </Form>
    </Wrapper>
  );
};

export default SignIn;
