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
  ContactContainer
} from "./style";
import { toast } from "react-toastify";
import VerifyModal from "../../../components/VerifyModal";
import { TextArea } from "../../../components/ExpenseModal/styles.jsx";

function Contact({ logout, categories, setCategories }) {
  document.title = "Dashboard - Contact";

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function onSubmitForm(e) {
    e.preventDefault();
    try {
      const body = {
        title,
        description,
      };

    await fetch("/api/v1/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
        body: JSON.stringify(body),
      });


      setTitle("");
      setDescription("");
      toast.success("Your report has been submitted successfully!");
    } catch (err) {
      toast.error(err.message);
      console.error(err.message);
    }
  }

  return (
    <ArchiveContainer>
      <Container>
        <H3>Contact</H3>
        <ContactContainer onSubmit={onSubmitForm}>
          <HR />
          <H4>What do you want to tell us?</H4>
          <Input
            name="title"
            position="column"
            placeholder="Title"
            type="name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <HR />
          <H4>Put here any relevant information</H4>
          <TextArea
            placeholder="Write anything you feel we need to know!"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <HR />

          <Button>Submit</Button>

        </ContactContainer>
      </Container>
    </ArchiveContainer>
  );
}

export default Contact;
