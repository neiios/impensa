import React, { useState } from "react";
import { MdDoDisturbOn } from "react-icons/md";
import ModalService from "../../Modal/ModalService.js";
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
  Icon
} from "./Styles.js";



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
              style={{ color: "blue" }}
              value="timeneth@gmail.com"
              type="email"
            />
          </InputContainer>
          <InputContainer>
            <Label>Name</Label>
            <Input value="Jessie"  type="name"/>
          </InputContainer>
          <InputContainer>
            <Label>Old password</Label>
            <Input
              value="Anjey Duda is gay"
              type={passwordShown ? "text" : "password"} 
            />
                  <Icon className={passwordShown ? "far fa-eye fa-xs" : "fas fa-eye-slash fa-xs"} onClick={togglePassword}/>
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

} 

export const ReadonlyDetails = () => {
  return (
<>
          <InputContainer>
            <Label>Email</Label>
            <Input
              type="email"
              style={{ color: "blue" }}
              value="timeneth@gmail.com"
              readonlyInput
            />
          </InputContainer>
          <InputContainer>
            <Label>Name</Label>
            <Input value="Jessie" 
             type="name" 
             readonlyInput/>
          </InputContainer>
          <InputContainer>
            <Label>Password</Label>
            <Input
              value="Anjey Duda is gay"
              type="password"
              readonlyInput
              
            />
          </InputContainer>
</>
  );

} 



const Settings = () => {
  // when click edit btn
  const [visible, setVisible] = React.useState(false);
  return (
    <Wrapper>
      <Heading>Account Status</Heading>
      <Container>
        <InputSection>
          <HeadingContainer>
            <Subheading>Account Details</Subheading>
            <SmallBtn primary onClick={() => setVisible(!visible)} >
              Edit
              <PenIcon className="fas fa-pen fa-xs" />
            </SmallBtn>
            <ModifyButtons>
            {visible && <SmallBtn>Save</SmallBtn>}
            </ModifyButtons>
          </HeadingContainer>
              {!visible && <ReadonlyDetails/>}
              {visible && <EditDetails/>}
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
