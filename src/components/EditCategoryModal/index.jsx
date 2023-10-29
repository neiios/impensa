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
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [categoryName, setCategoryName] = useState(currentId ? category : "");

  async function onDeleteCategory() {
    try {
      const response = await fetch(`/api/v1/categories/${currentId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
      });

      if (response.ok) {
        // Assuming the delete was successful, update the state to remove the category
        setCategories((prevCategories) =>
          prevCategories.filter((category) => category.id !== currentId),
        );
        toast.success("Category been deleted successfully!");
      } else {
        // Handle the case where the server response was not ok
        const errorData = await response.json();
        toast.error(`Error deleting category: ${errorData.message}`);
      }
    } catch (err) {
      toast.error(err.message);
      console.error(err.message);
    }
  }

  async function onCancelClick() {
    if (currentId) {
      onDeleteCategory();
    }
    closeModal();
  }

  async function onCreateCategory(e) {
    e.preventDefault();
    try {
      const body = {
        name: categoryName,
      };

      const response = await fetch("/api/v1/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
        body: JSON.stringify(body),
      });
      const parseData = await response.json();
      setCategories((prevCategories) => [...prevCategories, parseData]);
      toast.success("New category has been added successfully!");
    } catch (err) {
      toast.error(err.message);
      console.error(err.message);
    }
  }

  async function onEditCategory(e) {
    e.preventDefault();
    try {
      const body = {
        name: categoryName,
        id: currentId,
      };
      const response = await fetch(`/api/v1/categories/${currentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const updatedCategory = await response.json();
        console.log(updatedCategory);
        setCategories((prevCategories) =>
          prevCategories.map((category) =>
            category.id === currentId ? updatedCategory : category,
          ),
        );
        toast.success("Category has been updated successfully!");
      } else {
        const errorData = await response.json();
        toast.error(`Error updating category: ${errorData.message}`);
      }
    } catch (err) {
      toast.error(err.message);
      console.error(err.message);
    }
  }

  async function onSubmitForm(e) {
    if (currentId) {
      await onEditCategory(e);
    } else {
      onCreateCategory(e);
    }

    closeModal();
  }

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
        contentLabel="Example Modal"
      >
        <ContentWrapper onSubmit={onSubmitForm}>
          <Heading>
            <Headline>{currentId ? "Edit category" : "Add category"}</Headline>
            <CloseModal
              onClick={closeModal}
              className="fa-solid fa-xmark fa-xl"
            />
          </Heading>

          <Input
            placeholder="Category"
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <ButtonsContainer>
            <SaveButton>{currentId ? "Save" : "Create"}</SaveButton>
            <DeleteButton type="button" onClick={onCancelClick}>
              {currentId ? "Remove" : "Cancel"}
            </DeleteButton>
          </ButtonsContainer>
        </ContentWrapper>
      </Modal>
    </>
  );
};

export default EditCategoryModal;
