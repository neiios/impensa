import React, { useState } from "react";
import { PrimaryOutlineButton } from "../../components/Button";
import { StyledLink } from "../../components/Button/style";
import ItemForm from "../../components/itemForm";
import {
  Wrapper,
  Heading,
  Form,
  TextContainer,
  SigninContainer,
} from "./style";
import { LogoImg } from "../../components/Logo";
import { toast } from "react-toastify";
import { useNavigate, useSearchParams } from "react-router-dom";
import { handlePasswordReset } from "./passwordResetService";

export default function PasswordResetPage() {
  document.title = "Impensa: Password Reset";

  const [searchParams] = useSearchParams();
  const initialEmail = searchParams.get("email") || "";

  const [inputs, setInputs] = useState({
    email: initialEmail,
    token: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const resetStatus = await handlePasswordReset(inputs);
    if (resetStatus.success) {
      navigate("/signin");
    } else {
      toast.error(resetStatus.message);
    }
  };

  return (
    <Wrapper>
      <LogoImg />
      <SigninContainer>
        <Heading>Reset your password</Heading>
        <Form onSubmit={onSubmit}>
          <ItemForm
            label="Reset token"
            type="text"
            name="token"
            value={inputs.token}
            onChange={onChange}
          />
          <ItemForm
            label="Email"
            type="email"
            name="email"
            value={inputs.email}
            onChange={onChange}
          />
          <ItemForm
            label="Password"
            type="password"
            name="password"
            value={inputs.password}
            onChange={onChange}
          />
          <ItemForm
            label="Confirm your password"
            type="password"
            name="confirmPassword"
            value={inputs.confirmPassword}
            onChange={onChange}
          />
          <PrimaryOutlineButton style={{ margin: "auto" }}>
            Continue
          </PrimaryOutlineButton>
        </Form>
        <TextContainer>
          Don't have an account?
          <StyledLink to="/signup">Sign up</StyledLink>
        </TextContainer>
      </SigninContainer>
    </Wrapper>
  );
}
