import React from "react";
import { Link } from "react-scroll";
import {
  StyledButton,
  StyledOutlineButton,
  A,
  StyledLink,
  StyledPrimaryOutlineButton,
} from "./style.jsx";
const WrappedButton = (Component, props) => {
  const { href, to, target, children, disabled, isLoading, scroll, ...rest } =
    props;
  const button = (
    <Component disabled={disabled || isLoading} {...rest}>
      {children}
    </Component>
  );

  if (href)
    return (
      <A
        href={href}
        target={target || "_blank"}
        rel={!target ? "noopener noreferrer" : undefined}
      >
        {button}
      </A>
    );
  if (scroll)
    return (
      <Link spy={true} smooth={true} to={to}>
        {button}
      </Link>
    );
  if (to) return <StyledLink to={to}>{button}</StyledLink>;

  return button;
};

export const Button = (props) => WrappedButton(StyledButton, props);
export const OutlineButton = (props) =>
  WrappedButton(StyledOutlineButton, props);
export const PrimaryOutlineButton = (props) =>
  WrappedButton(StyledPrimaryOutlineButton, props);
