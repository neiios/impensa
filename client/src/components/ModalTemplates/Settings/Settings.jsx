import React, { useState } from "react";
import theme from "../../../theme/Index.js";
import {
  Wrapper,
  Container,
  InputSection,
  HeadingContainer,
  Subheading,
  ModifyButtons,
  SmallBtn,
  InputContainer,
  Label,
  PictureContainer,
  ProfilePicture,
  Input,
  PenIcon,
  Icon,
  PictureSelect,
} from "./Styles.js";
import ItemForm from "../../ItemForm.jsx";
export const EditDetails = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
      <InputContainer>
        <Label>Email</Label>
        <Input
          style={{ color: theme.bg.secondary }}
          value="timeneth@gmail.com"
          type="email"
        />
      </InputContainer>
      <InputContainer>
        <Label>Name</Label>
        <Input value="Jessie" type="name" />
      </InputContainer>
      <InputContainer>
        <Label>Old password</Label>
        <Input
          value="Anjey Duda is gay"
          type={passwordShown ? "text" : "password"}
        />
        <Icon
          className={
            passwordShown ? "far fa-eye fa-xs" : "fas fa-eye-slash fa-xs"
          }
          onClick={togglePassword}
        />
      </InputContainer>
      <InputContainer>
        <Label>New password</Label>
        <Input
          value="Anjey Duda is gay"
          type={passwordShown ? "text" : "password"}
        />
      </InputContainer>
    </>
  );
};

const Settings = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [visible, setVisible] = React.useState(false);
  return (
    <Wrapper>
      <Container>
        <InputSection>
          <HeadingContainer>
            <Subheading>Account Details</Subheading>
            <SmallBtn primary onClick={() => setVisible(!visible)}>
              {!visible && "Edit"}
              {!visible && <PenIcon className="fas fa-pen fa-xs" />}
              {visible && "Close"}
            </SmallBtn>
            {visible && <SmallBtn>Save</SmallBtn>}
          </HeadingContainer>
          <ItemForm
            type="email"
            style={{ color: theme.bg.secondary }}
            value="timeneth@gmail.com"
            readonlyInput
            label="Email"
            postion="row"
          />
          <ItemForm
            value="Zhong Xina"
            type="name"
            readonlyInput
            label="Name"
            postion="row"
          />

          <ItemForm
            type={passwordShown ? "text" : "password"}
            label="Password"
            postion="row"
            readonlyInput
          />

          {visible && (
            <ItemForm
              type={passwordShown ? "text" : "password"}
              label="New password"
              postion="row"
              readonlyInput
            />
          )}
          {visible && (
            <Icon
              className={
                passwordShown ? "fas fa-eye-slash fa-xs" : "far fa-eye fa-xs"
              }
              onClick={togglePassword}
            />
          )}
        </InputSection>

        <PictureContainer>
          <Subheading>Profile Picture</Subheading>
          <ProfilePicture src="images/max.png" />
          {visible && <PictureSelect type="file" />}
        </PictureContainer>
      </Container>
    </Wrapper>
  );
};

export default Settings;
