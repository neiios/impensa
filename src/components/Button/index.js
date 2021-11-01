import React from "react"
import {StyledButton,
        StyledButtonBig,
        A,
        StyledLink } 
        from "./styles.js"
const WrappedButton = (Component,props) => {
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
            target={target || '_blank'}
            rel={!target ? 'noopener noreferrer' : undefined}
          >
            {button}
          </A>
        );
      if (to) return <StyledLink to={to}>{button}</StyledLink>;
      return button;
    };

export const Button = (props: Props) => WrappedButton(StyledButton, props);
export const BiggerButton = (props: Props) => WrappedButton(StyledButtonBig, props);
