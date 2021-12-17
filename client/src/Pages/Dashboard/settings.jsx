import React, { useState, useEffect } from "react";
import ItemForm from "../../components/ItemForm";
import { Button } from "../../components/Button/index";
import styled from "styled-components";
import { ArchiveContainer, H3, H5, Input, H4 } from "./style";
import theme from "../../theme/Index";
export const Wrapper = styled.div``;

export const Container = styled.div`
  width: 350px;
  justify-content: center;
  align-items: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
`;

export const HR = styled.hr`
  background: #fff2f2;
  width: 100%;
  border: none;
  height: 1px;
`;

export const EmailContainer = styled.span`
  color: ${theme.bg.secondary};
`;

const Settings = ({ logout }) => {
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
    <ArchiveContainer onSubmit={onSubmitForm}>
      <Container>
        <H3>Account Details</H3>
        <H5>
          Logged in as <EmailContainer>{userEmail}</EmailContainer>
        </H5>
        <Button onClick={(e) => logout(e)}>Log out</Button>
        <HR />
        <H4>Change password</H4>
        <Input
          position="column"
          placeholder="Old Password"
          type="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          required
        />
        <Input
          position="column"
          placeholder="New Password"
          type="password"
          value={userNewPassword}
          onChange={(e) => setUserNewPassword(e.target.value)}
          required
        />
        <HR />
        <H4>Change Name or Email</H4>

        <Input
          position="column"
          placeholder="Email"
          type="text"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
        <Input
          position="column"
          placeholder="Name"
          type="name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <HR />
        <Button>Save changes</Button>
      </Container>
    </ArchiveContainer>
  );
};

export default Settings;
