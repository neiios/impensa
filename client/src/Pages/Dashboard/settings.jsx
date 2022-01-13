import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button/index";
import styled from "styled-components";
import { ArchiveContainer, H3, H5, Input, H4 } from "./style";
import theme from "../../theme/Index";
import { device } from "../../mediaQueries";

import { toast } from "react-toastify";

export const Wrapper = styled.div``;
export const Container = styled.form`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  display: none;
  @media ${device.laptop} {
    display: block;
  }
`;

export const HR = styled.hr`
  background: #faeaea;
  width: 20%;
  border: none;
  height: 1px;
`;

export const EmailContainer = styled.span`
  color: ${theme.bg.secondary};
`;

function Settings({ logout }) {
  document.title = "Dashboard - Settings";
  const [nameConst, setNameConst] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userNewPassword, setUserNewPassword] = useState("");

  async function getUserData() {
    try {
      const res = await fetch("/dashboard/user", {
        method: "GET",
        headers: { jwtToken: localStorage.token },
      });

      const parseData = await res.json();

      setUserEmail(parseData[0].user_email);
      setUserName(parseData[0].user_name);
      setNameConst(parseData[0].user_name);
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
      const response = await fetch("/dashboard/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          jwtToken: localStorage.token,
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      console.log(parseRes);

      if (parseRes === "User updated succesfully!") {
        toast.success(parseRes);
        logout(e);
      } else {
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
      toast.error(err.message);
    }
  }

  return (
    <ArchiveContainer onSubmit={onSubmitForm}>
      <Container>
        <H3>Account Details</H3>
        <H5>
          Logged in as <EmailContainer>{nameConst}</EmailContainer>
        </H5>
        <ButtonContainer>
          {" "}
          <Button onClick={(e) => logout(e)}>Log out</Button>
        </ButtonContainer>
        <HR />
        <H4>Change password</H4>
        <Input
          position="column"
          placeholder="Old Password"
          type="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          />
        <Input
          position="column"
          placeholder="New Password"
          type="password"
          value={userNewPassword}
          onChange={(e) => setUserNewPassword(e.target.value)}
        />
        <HR />
        <H4>Change Name or Email</H4>

        <Input
          position="column"
          placeholder="Email"
          type="text"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <Input
          position="column"
          placeholder="Name"
          type="name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <HR />
        <Button>Save changes</Button>
      </Container>
    </ArchiveContainer>
  );
}

export default Settings;
