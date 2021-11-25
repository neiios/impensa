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
          <StringContainer>
            <InputLabel>Email</InputLabel>
          </StringContainer>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <StringContainer>
            <InputLabel>Name</InputLabel>
          </StringContainer>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <StringContainer>
            <InputLabel>Password</InputLabel>
          </StringContainer>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
          <StringContainer>
            <InputLabel>Repeat password</InputLabel>
          </StringContainer>
          <Input
            type="password"
            id="password2"
            name="password2"
            placeholder="Confirm Password"
            required
          />
        </InputWrapper>
        {/* <WideButton style={{ margin: "auto" }}>Create account</WideButton> */}
        <input type="submit" value="Register" />
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
