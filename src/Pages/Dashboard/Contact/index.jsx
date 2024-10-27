import React, { useState } from "react";
import { Button } from "../../../components/Button";
import { ArchiveContainer, H3, H4, Input } from "../style";
import { toast } from "react-toastify";
import { Container, HR, ContactContainer } from "./style";
import { TextArea } from "../../../components/ExpenseModal/styles";
import { submitContactForm } from "./contactService";

function Contact() {
  document.title = "Dashboard - Contact";

  return (
    <ArchiveContainer>
      <Container>
        <H3>Contact</H3>
        <ContactForm />
      </Container>
    </ArchiveContainer>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await submitContactForm(formData);
    if (success) {
      setFormData({ title: "", description: "" });
      toast.success("Your report has been submitted successfully!");
    }
  };

  return (
    <ContactContainer onSubmit={handleSubmit}>
      <HR />
      <H4>What do you want to tell us?</H4>
      <Input
        name="title"
        placeholder="Title"
        value={formData.title}
        required
        onChange={handleChange}
      />
      <HR />
      <H4>Put here any relevant information</H4>
      <TextArea
        name="description"
        required
        placeholder="Write anything you feel we need to know!"
        value={formData.description}
        onChange={handleChange}
      />
      <HR />
      <Button type="submit">Submit</Button>
    </ContactContainer>
  );
}

export default Contact;
