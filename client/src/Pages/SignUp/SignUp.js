import React from "react";
import {
  Wrapper,
  Form,
  Input,
  Heading,
  InputLabel,
  StringContainer,
  InputWrapper,
} from "./Styles.js";
import { WideButton, ModifiedLink } from "../../components/Button/index.js";

// add location to identify currency
const SignUp = () => {
  return (
    <Wrapper>
      <Form action="http://localhost:3001/users/register" method="POST">
        <Heading>Create your Impensa account</Heading>
        <InputWrapper>
          <InputLabel for="email">Email</InputLabel>
          <Input type="email" id="email" name="email" required />
          <InputLabel for="name">Username</InputLabel>
          <Input type="text" id="name" name="name" required />
          <InputLabel for="password">Password</InputLabel>
          <Input type="password" id="password" name="password" required />
          <InputLabel for="password2">Repeat password</InputLabel>
          <Input type="password" id="password2" name="password2" required />
        </InputWrapper>
        <WideButton style={{ margin: "auto" }}>Create account</WideButton>
        <StringContainer primary>
          Have an account?
          <ModifiedLink style={{ color: "#635BFF" }} to="/SignIn">
            Sign in
          </ModifiedLink>
        </StringContainer>
      </Form>
    </Wrapper>
  );
};

export default SignUp;
