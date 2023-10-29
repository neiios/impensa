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

const VerifyRemovalModal = ({
  children,
  currentId,
  setCategories,
  category,
  userData,
  logout,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  console.log(userData);
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

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/v1/me", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
        body: JSON.stringify({ password: userPassword }),
      });

      if (response.ok) {
        toast.success("Your account has been removed successfully!");
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
            <Headline>Confirm Removal</Headline>
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

export default VerifyRemovalModal;
