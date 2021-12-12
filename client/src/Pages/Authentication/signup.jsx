import React, { useState } from "react";
import { Wrapper, Form, Heading, TextContainer } from "./style";
import { WideButton, ModifiedLink } from "../../components/Button/index.jsx";
import ItemForm from "../../components/ItemForm.jsx";
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
        <ItemForm
          position="column"
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={(e) => onChange(e)}
        />
        <ItemForm
          position="column"
          type="text"
          name="name"
          label="Name"
          value={name}
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
