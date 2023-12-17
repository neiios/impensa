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
} from "./style.jsx";
import "./style.css";
import { toast } from "react-toastify";
import { LogoImg } from "../../components/Logo/index.jsx";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function PasswordResetPage() {
  document.title = "Impensa: Password Reset";

  const [searchParams, setSearchParams] = useSearchParams();
  const initialEmail = searchParams.get("email");

  const [inputs, setInputs] = useState({
    email: initialEmail,
    token: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      if (inputs.password.length < 8) {
        toast.error("Password must be at least 8 characters long");
        return;
      }

      if (inputs.password !== inputs.confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      const response = await fetch("/api/v1/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      if (response.status !== 200) {
        toast.error("Password reset failed. Try again.");
        return;
      }

      navigate("/signin");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Wrapper>
      <LogoImg />
      <SigninContainer>
        <Heading>Reset your password</Heading>
        <Form onSubmit={handlePasswordReset}>
          <ItemForm
            label="Reset token"
            position="column"
            type="text"
            name="token"
            value={inputs.token}
            onChange={(e) => onChange(e)}
          />
          <ItemForm
            position="column"
            label="Email"
            type="email"
            name="email"
            value={inputs.email}
            onChange={(e) => onChange(e)}
          />
          <ItemForm
            position="column"
            type="password"
            name="password"
            label="Password"
            value={inputs.password}
            onChange={(e) => onChange(e)}
          />
          <ItemForm
            position="column"
            type="password"
            name="confirmPassword"
            label="Confirm your password"
            value={inputs.confirmPassword}
            onChange={(e) => onChange(e)}
          />
          <PrimaryOutlineButton style={{ margin: "auto" }}>
            Continue
          </PrimaryOutlineButton>
        </Form>
        <TextContainer>
          Don't have an account?
          <StyledLink style={{ color: "#635BFF" }} to="/signup">
            Sign up
          </StyledLink>
        </TextContainer>
      </SigninContainer>
    </Wrapper>
  );
}
