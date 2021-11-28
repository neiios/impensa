import React from "react";
import {
  Wrapper,
  Input,
  Heading,
  InputLabel,
  StringContainer,
  InputWrapper,
} from "../SignUp/Styles.js";
import { SignInForm } from "./Styles.js";
import { WideButton, ModifiedLink } from "../../components/Button/index.js";

// add location to identify currency
const SignIn = () => {
  return (
    <Wrapper>
      <SignInForm action="http://localhost:3001/users/register" method="POST">
        <Heading>Sign in to your account</Heading>
        <InputWrapper>
          <InputLabel for="email">Email or username</InputLabel>
          <Input type="email" id="email" name="email" required />
          <InputLabel for="password">Password</InputLabel>
          <Input type="password" id="password" name="password" required />
        </InputWrapper>
        <WideButton style={{ margin: "auto" }}>Continue</WideButton>
        <StringContainer primary>
          Don't have an account?
          <ModifiedLink style={{ color: "#635BFF" }} to="/SignUp">
            Sign up
          </ModifiedLink>
        </StringContainer>
      </SignInForm>
    </Wrapper>
  );
};

export default SignIn;
