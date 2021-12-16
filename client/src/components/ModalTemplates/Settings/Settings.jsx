import React, { useState, useEffect } from "react";
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
import { TextArea } from "../../NewExpense/style.jsx";
import { H5 } from "../../NewExpense/style.jsx";
import { ButtonContainer } from "../../NewExpense/style.jsx";
import ItemForm from "../../ItemForm.jsx";
import { Button } from "../../Button/index.jsx";

const Settings = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userNewPassword, setUserNewPassword] = useState("");
  const [visible, setVisible] = useState(false);

  async function getUserData() {
    try {
      const res = await fetch("http://localhost:5000/dashboard/user", {
        method: "GET",
        headers: { jwtToken: localStorage.token },
      });

      const parseData = await res.json();

      console.log(parseData[0]);
      setUserEmail(parseData[0].user_email);
      setUserName(parseData[0].user_name);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  async function onSubmitForm(e) {
    e.preventDefault();
    try {
      const body = { userEmail, userName, userPassword, userNewPassword };
      const response = await fetch("http://localhost:5000/dashboard/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          jwtToken: localStorage.token,
        },
        body: JSON.stringify(body),
      });

      console.log(response);
      window.location = "/dashboard/overview";
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Wrapper onSubmit={onSubmitForm}>
      <Container>
        <InputSection>
          <ItemForm
            label="Email"
            placeholder="Email"
            type="text"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <ItemForm
            label="Name"
            placeholder="Name"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <ItemForm
            label="Password"
            placeholder="Old Password"
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
          <ItemForm
            label="New password"
            placeholder="New Password"
            type="password"
            value={userNewPassword}
            onChange={(e) => setUserNewPassword(e.target.value)}
            required
          />
          <ButtonContainer>
            <Button>Submit</Button>
          </ButtonContainer>
        </InputSection>

        <PictureContainer>
          <Subheading>Profile Picture</Subheading>
          <ProfilePicture src="../images/max.png" />
        </PictureContainer>
      </Container>
    </Wrapper>
  );
};

export default Settings;
