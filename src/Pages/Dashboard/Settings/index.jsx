import React, { useState, useEffect } from "react";
import { Button } from "../../../components/Button/index";
import { ArchiveContainer, UserContainer, H3, H5, Input, H4 } from "../style";
import { currency_list } from "../../../data/currency-list.js";
import Select from "react-select";
import { colourStyles } from "../../../components/ExpenseModal";
import EditCategoryModal from "../../../components/EditCategoryModal";
import VerifyRemovalModal from "../../../components/VerifyRemovalModal";
import {
  Container,
  ButtonContainer,
  HR,
  EmailContainer,
  CategoriesContainer,
  Category,
  Hint,
  RemoveAccount,
  SelectContainer,
  UserLog,
} from "./style";
import { toast } from "react-toastify";
import VerifyModal from "../../../components/VerifyModal";

function Settings({ logout, categories, setCategories }) {
  document.title = "Dashboard - Settings";

  // Single state object for user data
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    newPassword: "",
    currency: "",
  });

  useEffect(() => {
    getUserData();
    getCategories();
  }, []);

  async function getCategories() {
    try {
      const res = await fetch("/api/v1/categories", {
        method: "GET",
      });

      const parseData = await res.json();
      setCategories(parseData);
    } catch (err) {
      console.error(err.message);
    }
  }

  async function getUserData() {
    try {
      const res = await fetch("/api/v1/me", {
        method: "GET",
      });

      const parseData = await res.json();
      setUserData((prev) => ({
        ...prev,
        email: parseData.email,
        username: parseData.username,
        currency: parseData.currency,
      }));
    } catch (err) {
      console.error(err.message);
    }
  }

  // Function to handle changes in form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  // Function to handle currency change
  const handleCurrencyChange = (selectedOption) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      currency: selectedOption.value,
    }));
  };

  return (
    <ArchiveContainer>
      <Container>
        <H3>Account Details</H3>
        <H5>
          Logged in as <EmailContainer>{userData.username}</EmailContainer>
        </H5>
        <ButtonContainer>
          <Button onClick={logout}>Log out</Button>
        </ButtonContainer>
        <HR />
        <H4>Categories</H4>
        <Hint>Click on a category to edit</Hint>
        <CategoriesContainer>
          {categories.map((category) => (
            <EditCategoryModal
              setCurrentId={10}
              component={"edit"}
              currentId={category.id}
              category={category.name}
              key={category.id}
              setCategories={setCategories}
            >
              <Category>{category.name}</Category>
            </EditCategoryModal>
          ))}
          <EditCategoryModal setCategories={setCategories} component={"edit"}>
            <Category>
              <i className="fa-solid fa-plus"></i>
            </Category>
          </EditCategoryModal>
        </CategoriesContainer>

        <UserContainer>
          <HR />
          <H4>Change currency</H4>
          <SelectContainer>
            <Select
              styles={colourStyles}
              onChange={handleCurrencyChange}
              options={currency_list}
              className="basic-multi-select"
              classNamePrefix="select"
              value={currency_list.find((c) => c.value === userData.currency)}
            />
          </SelectContainer>

          <HR />
          <H4>Change password</H4>
          <Input
            name="newPassword"
            position="column"
            placeholder="New Password"
            type="password"
            value={userData.newPassword}
            onChange={handleInputChange}
          />
          <HR />
          <H4>Change Name or Email</H4>
          <Input
            name="email"
            position="column"
            placeholder="Email"
            type="text"
            value={userData.email}
            onChange={handleInputChange}
          />
          <Input
            name="username"
            position="column"
            placeholder="Name"
            type="text"
            value={userData.username}
            onChange={handleInputChange}
          />
          <HR />
          <VerifyModal logout={logout} userData={userData}>
            <Button type="button">Save changes</Button>
          </VerifyModal>
          <VerifyRemovalModal logout={logout}>
            <RemoveAccount>Remove your account</RemoveAccount>
          </VerifyRemovalModal>
          <UserLog to="../log">View user activity</UserLog>
        </UserContainer>
      </Container>
    </ArchiveContainer>
  );
}

export default Settings;
