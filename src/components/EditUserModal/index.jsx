import React, { useState } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

Modal.setAppElement("#root");

function EditUserModal({ children, userData, onClose, logout }) {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setPassword("");
    onClose?.();
  };

  function getUpdatedFields() {
    const fields = {};
    const fieldsToCheck = ['email', 'username', 'newPassword', 'currency'];

    fieldsToCheck.forEach(field => {
      if (userData[field]?.trim()) {
        fields[field] = userData[field].trim();
      }
    });

    fields.password = password;
    return fields;
  }

  async function handleSubmit(e) {
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
        await createNotification("Update of the account", "You updated your contact details");
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
  }

  async function createNotification(title, description) {
    try {
      await fetch("/api/v1/notifications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });
    } catch (err) {
      console.error("Failed to create notification:", err);
    }
  }

  return (
    <>
      <button
        onClick={handleOpen}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') ? handleOpen() : null}
        className="inline-flex w-auto"
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
      >
        {children}
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        className="modal-base"
        overlayClassName="overlay-base"
        closeTimeoutMS={200}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <form onSubmit={handleSubmit} className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Confirm Changes</h2>
            <button
              type="button"
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark fa-xl" />
            </button>
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
              aria-label="Password confirmation"
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Updating..." : "Confirm"}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

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