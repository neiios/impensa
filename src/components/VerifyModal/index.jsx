import React, { useState } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
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

Modal.setAppElement("#root");

const EditUserModal = ({ children, userData, onClose, logout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setPassword("");
    onClose?.();
  };

  const getUpdatedFields = () => {
    const fields = {};
    const fieldsToCheck = ["email", "username", "newPassword", "currency"];

    fieldsToCheck.forEach((field) => {
      if (userData[field]?.trim()) {
        fields[field] = userData[field].trim();
      }
    });

    fields.password = password;
    return fields;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password) {
      toast.error("Password is required");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/v1/me", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(getUpdatedFields()),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Account updated successfully!");
        await createNotification(
          "Update of the account",
          "You updated your contact details",
        );
        logout(e);
      } else {
        toast.error(data.message || "Failed to update account");
      }
    } catch (err) {
      console.error("Update failed:", err);
      toast.error("Failed to update account. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const createNotification = async (title, description) => {
    try {
      await fetch("/api/v1/notifications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });
    } catch (err) {
      console.error("Failed to create notification:", err);
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleOpen();
          }
        }}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          width: "auto",
          display: "inline-flex",
        }}
        tabIndex={0}
        aria-haspopup="dialog"
        aria-label="Edit user settings"
      >
        {children}
      </button>
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
        isOpen={isOpen}
        onRequestClose={handleClose}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        aria-labelledby="modal-title"
      >
        <ContentWrapper onSubmit={handleSubmit}>
          <Heading>
            <Headline id="modal-title">Confirm changes</Headline>
            <CloseModal
              onClick={handleClose}
              className="fa-solid fa-xmark fa-xl"
              aria-label="Close modal"
              type="button"
            />
          </Heading>

          <Input
            position="column"
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
              onClick={handleClose}
              disabled={isSubmitting}
              aria-label="Cancel changes"
            >
              Cancel
            </SaveButton>
            <DeleteButton
              type="submit"
              disabled={isSubmitting}
              aria-label={
                isSubmitting
                  ? "Updating account settings..."
                  : "Confirm changes"
              }
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
