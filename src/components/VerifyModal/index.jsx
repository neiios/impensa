import React, { useState, useEffect } from "react";
import "../../theme/Modal.css";
import Modal from "react-modal";
import {
  CloseModal,
  ContentWrapper,
  Headline,
  Heading,
  Input,
  SaveButton,
  DeleteButton,
  ButtonsContainer,
} from "./styles";
import { toast } from "react-toastify";
import { Button } from "react-scroll";
Modal.setAppElement("#root");

const EditCategoryModal = ({
  children,
  currentId,
  setCategories,
  category,
  userData,
  logout,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [userPassword, setUserPassword] = useState(null);

  async function onCancelClick() {
    if (currentId) {
      onDeleteCategory();
    }
    closeModal();
  }

  // Function to submit the form
  const onSubmitForm = async (e) => {
    e.preventDefault();

    const fieldsToUpdate = {};
    if (userData.email !== "") fieldsToUpdate.email = userData.email;
    if (userData.username !== "") fieldsToUpdate.username = userData.username;
    if (userData.newPassword !== "")
      fieldsToUpdate.newPassword = userData.newPassword;
    if (userData.currency !== "") fieldsToUpdate.currency = userData.currency;
    fieldsToUpdate.password = userPassword;

    try {
      const response = await fetch("/api/v1/me", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fieldsToUpdate),
      });

      const parseRes = await response.json();

      if (response.ok) {
        toast.success("Your account has been updated successfully!");
        logout(e);
      } else {
        const errorData = await response.json();
        toast.error(errorData.errors.Password[0]);
      }
    } catch (err) {
      console.error(err.message);
      toast.error(err.message);
    }
  };

  return (
    <>
      <div onClick={openModal}>{children}</div>
      <Modal
        className={{
          base: "modal-base",
          afterOpen: "modal-base_after-open",
          beforeClose: "modal-base_before-close",
        }}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-base_after-open",
          beforeClose: "overlay-base_before-close",
        }}
        closeTimeoutMS={200}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <ContentWrapper onSubmit={onSubmitForm}>
          <Heading>
            <Headline>Confirm changes</Headline>
            <CloseModal
              onClick={closeModal}
              className="fa-solid fa-xmark fa-xl"
            />
          </Heading>

          <Input
            position="column"
            placeholder="Your password"
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />

          <ButtonsContainer>
            <DeleteButton>Confirm</DeleteButton>
          </ButtonsContainer>
        </ContentWrapper>
      </Modal>
    </>
  );
};

export default EditCategoryModal;
