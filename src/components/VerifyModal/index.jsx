import React, { useState } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
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
import { handleUserSubmit } from "./submitHandler"; // Adjust path as necessary

Modal.setAppElement("#root");

const EditUserModal = ({ children, userData, onClose, logout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleToggleModal = () => setIsOpen(!isOpen);

  const resetModalState = () => {
    setIsOpen(false);
    setPassword("");
    onClose?.();
  };

  const createNotification = (title, description) =>
    fetch("/api/v1/notifications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    }).catch((err) => console.error("Notification error:", err));

  return (
    <>
      <button
        onClick={handleToggleModal}
        style={{ background: "none", border: "none", display: "inline-flex" }}
        aria-haspopup="dialog"
        aria-label="Edit user settings"
      >
        {children}
      </button>
      <Modal
        className="modal-base"
        overlayClassName="overlay-base"
        closeTimeoutMS={200}
        isOpen={isOpen}
        onRequestClose={resetModalState}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        aria-labelledby="modal-title"
      >
        <ContentWrapper
          onSubmit={(e) =>
            handleUserSubmit({
              e,
              password,
              userData,
              logout,
              setIsSubmitting,
              createNotification,
            })
          }
        >
          <Heading>
            <Headline id="modal-title">Confirm changes</Headline>
            <CloseModal onClick={resetModalState} aria-label="Close modal" />
          </Heading>
          <Input
            placeholder="Your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-label="Password confirmation"
          />
          <ButtonsContainer>
            <SaveButton
              type="button"
              onClick={resetModalState}
              disabled={isSubmitting}
              aria-label="Cancel changes"
            >
              Cancel
            </SaveButton>
            <DeleteButton
              type="submit"
              disabled={isSubmitting}
              aria-label="Confirm changes"
            >
              {isSubmitting ? "Updating..." : "Confirm"}
            </DeleteButton>
          </ButtonsContainer>
        </ContentWrapper>
      </Modal>
    </>
  );
};

EditUserModal.propTypes = {
  children: PropTypes.node.isRequired,
  userData: PropTypes.shape({
    email: PropTypes.string,
    username: PropTypes.string,
    newPassword: PropTypes.string,
    currency: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func,
  logout: PropTypes.func.isRequired,
};

export default EditUserModal;
