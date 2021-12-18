import React from "react";
import { ModifiedLink } from "../Button/index.jsx";
import {
  FooterWrapper,
  Container,
  ContactContainer,
  GithubContainer,
  GithubIcon,
} from "./style.jsx";
const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <ContactContainer>
          © 2021 |
          <ModifiedLink href="https://github.com/richard96292/impensa/discussions">
            Contact
          </ModifiedLink>
        </ContactContainer>
        <GithubContainer>
          <ModifiedLink href="https://github.com/richard96292/impensa">
            <GithubIcon className="fab fa-github" />
          </ModifiedLink>
        </GithubContainer>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
