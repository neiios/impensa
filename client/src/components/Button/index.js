import React from "react";
import {
  StyledButton,
  StyledButtonBig,
  A,
  StyledLink,
  LinkContainer,
  WideBtn,
  MenuLinks,
  SpentButton,
  SmallBtn
} from "./styles.js";
const WrappedButton = (Component, props) => {
  const { href, to, target, children, disabled, isLoading, ...rest } = props;
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
  if (to) return <StyledLink to={to}>{button}</StyledLink>;
  return button;
};

export const Button = (props) => WrappedButton(StyledButton, props);
export const BiggerButton = (props) => WrappedButton(StyledButtonBig, props);
export const ModifiedLink = (props) => WrappedButton(LinkContainer, props);
export const WideButton = (props) => WrappedButton(WideBtn, props);
export const MenuRef = (props) => WrappedButton(MenuLinks, props);
export const SpentBtn = (props) => WrappedButton(SpentButton, props);
export const SmallButton = (props) => WrappedButton(SmallBtn, props);