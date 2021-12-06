import React, { useState } from "react";
import {
  Wrapper,
  Heading,
  Container,
  InputSection,
  HeadingContainer,
  Subheading,
  EditBtn,
  ModifyButtons,
  SmallBtn,
  InputContainer,
  Label,
  PictureContainer,
  H4,
  ProfilePicture,
  Input,
  PenIcon,
} from "./Styles.js";

function typeChanger() {
  alert("The type of Input1 will now change from button to text");
  document.getElementById("password1").type = "email";
}

const Settings = () => {
  // when click edit btn
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <Wrapper>
      <Heading>Account Status</Heading>
      <Container>
        <InputSection>
          <HeadingContainer>
            <Subheading>Account Details</Subheading>
            <EditBtn onClick={handleClick}>
              Edit
              <PenIcon className="fas fa-pen fa-xs" />
            </EditBtn>
            <ModifyButtons onclick={handleClick} click={!click}>
              <SmallBtn>Save</SmallBtn>
            </ModifyButtons>
          </HeadingContainer>
          <InputContainer>
            <Label>Email</Label>
            <Input
              style={{ color: "blue" }}
              value="timeneth@gmail.com"
              onclick={handleClick}
              click={!click}
            />
          </InputContainer>
          <InputContainer>
            <Label>Name</Label>
            <Input value="Jessie" onclick={handleClick} click={!click} />
          </InputContainer>
          <InputContainer>
            <Label>Password</Label>
            <Input
              id="password1"
              value="Anjey Duda is gay"
              type="password"
              onclick={handleClick}
              click={!click}
            />
          </InputContainer>

          {/* <DropoutSection>
        <H4>Currency</H4>
        <Span>Please select a preferred currency for your Dashboard</Span>
        </DropoutSection>

        <DropoutSection>
        <H4>Language</H4>
        <Span>Please select a preferred language for your Dashboard</Span>
        <LanguageSelector>
        <SmallBtn>English</SmallBtn>
        <SmallBtn>Lithuanian</SmallBtn>
        <SmallBtn>Russian</SmallBtn>
        </LanguageSelector>
       </DropoutSection>  */}
        </InputSection>
        <PictureContainer>
          <H4>Profile Picture</H4>
          <ProfilePicture src="images/max.png" />
        </PictureContainer>
      </Container>
    </Wrapper>
  );
};

export default Settings;
