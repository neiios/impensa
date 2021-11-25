import React from "react";
import {
  Wrapper,
  Form,
  Input,
  Heading,
  InputLabel,
  StringContainer,
  InputWrapper,
} from "../../Pages/SignIn/Styles.js";
import { WideButton, ModifiedLink } from "../Button/index.js";
const SignIn = () => {
  return (
    <Wrapper>
      <Form>
        <Heading>Sign in to your account</Heading>
        <InputWrapper>
          <StringContainer>
            <InputLabel>Email</InputLabel>
          </StringContainer>
          <Input type="email" name="email" />
          <StringContainer>
            <InputLabel>Password</InputLabel>
            <ModifiedLink style={{ color: "#635BFF" }} to="obamium">
              Forgot your password?
            </ModifiedLink>
          </StringContainer>
          <Input type="password" name="password" />
        </InputWrapper>
        <WideButton style={{ margin: "auto" }}>Proceed</WideButton>
        <StringContainer primary>
          Don't have and account?
          <ModifiedLink style={{ color: "#635BFF" }} to="obamium">
            Sign up
          </ModifiedLink>
        </StringContainer>
      </Form>
    </Wrapper>
  );
};

export default SignIn;
