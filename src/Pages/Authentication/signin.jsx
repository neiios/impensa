import React, { useState } from "react";
import { PrimaryOutlineButton } from "../../components/Button/index.jsx";
import { StyledLink } from "../../components/Button/style.jsx";
import ItemForm from "../../components/itemForm.jsx";
import {
  Wrapper,
  Heading,
  Form,
  TextContainer,
  SigninContainer,
  OauthProviderButton,
} from "./style";
import "./style.css";
import { toast } from "react-toastify";
import { LogoImg } from "../../components/Logo/index.jsx";
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
      const response = await fetch("/api/v1/auth/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.status === 200) {
        setAuth(true);
      } else {
        setAuth(false);
        toast.error("User does not exist!");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  function onSignInGithub() {
    const backendLocation = process.env.REACT_APP_BACKEND_LOCATION ?? "";
    const endpointPath = `${backendLocation}/api/v1/auth/github`;
    window.location = endpointPath;
  }

  return (
    <Wrapper>
      <LogoImg />
      <Heading>Sign in to Impensa</Heading>
      <SigninContainer>
        <Form onSubmit={onSubmitForm}>
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
        </Form>
        <button
          className="oauth-provider-button"
          type="button"
          onClick={onSignInGithub}
        >
          <i className="fab fa-github"></i> Sign in with GitHub
        </button>
        <TextContainer>
          Don't have an account?
          <StyledLink style={{ color: "#635BFF" }} to="/signup">
            Sign up
          </StyledLink>
        </TextContainer>
      </SigninContainer>
    </Wrapper>
  );
};

export default SignIn;
