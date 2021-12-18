import React from "react";
import { ModifiedLink } from "../Button/index.jsx";
import { FooterWrapper, Container } from "./style.jsx";
const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <div style={{ display: "flex", gap: "5px" }}>
          © 2021 |{" "}
          <ModifiedLink href="https://github.com/richard96292/impensa/discussions">
            Contact
          </ModifiedLink>
        </div>
        <div style={{ marginLeft: "auto", position: "relative" }}>
          <ModifiedLink href="https://github.com/richard96292/impensa">
            <i className="fab fa-github" />
          </ModifiedLink>
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
