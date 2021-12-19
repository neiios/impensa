import React from "react";
import { A } from "../Button/style.jsx";
import {
  FooterWrapper,
  Container,
  ContactContainer,
  GithubContainer,
  GithubIcon,
} from "./style.jsx";
let currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <ContactContainer>
          © {currentYear} |
          <A href="https://github.com/richard96292/impensa/discussions">
            Contact
          </A>
        </ContactContainer>
        <GithubContainer>
          <A href="https://github.com/richard96292/impensa">
            <GithubIcon className="fab fa-github" />
          </A>
        </GithubContainer>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
