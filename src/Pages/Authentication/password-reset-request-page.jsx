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

export default function PasswordResetRequestPage() {
  document.title = "Impensa: Password Reset Request";
  const [inputs, setInputs] = useState({
    email: "",
  });

  const navigate = useNavigate();

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const handlePasswordResetRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `/api/v1/auth/reset-password?email=${encodeURIComponent(inputs.email)}`,
        {
          method: "GET",
        },
      );

      if (response.status !== 200) {
        toast.error("Password reset failed. Try again.");
        return;
      }

      navigate(`/reset-password?email=${encodeURIComponent(inputs.email)}`);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Wrapper>
      <LogoImg />
      <SigninContainer>
        <Heading>Reset your password</Heading>
        <Form onSubmit={handlePasswordResetRequest}>
          <ItemForm
            position="column"
            label="Email"
            type="email"
            name="email"
            value={inputs.email}
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
