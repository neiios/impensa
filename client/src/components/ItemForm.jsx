import React from "react";
import styled from "styled-components";
import theme from "../theme/Index";
export const Input = styled.input`
  max-width: 100%;
  margin-top: 10px;
  padding: 11px 15px;
  background: #f9f9fa;
  margin-bottom: 2rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(3, 102, 214, 0.1);
  font-size: 14px;
  transition: all 0.3s ease-out;
  :focus {
    box-shadow: ${theme.bg.semiBlue} 0px 0px 0px 3px;
  }
`;

export const InputLabel = styled.label`
  color: ${theme.text.grey};
  font-size: 0.8em;
  font-weight: 600;
  letter-spacing: 0.03em;
`;

export const RowInput = styled(Input)`
  padding: 8px 10px;
  margin: 0;
  position: absolute;
  left: 120px;
  width: 200px !important;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  position: relative;
  align-items: center;
  margin: 10px;
`;

const ItemForm = ({ label, position, type, children, ...otherProps }) => (
  <>
    {position === "column" ? (
      <>
        <InputLabel>{label}</InputLabel>
        <Input type={type} {...otherProps} />
      </>
    ) : (
      <Wrapper>
        <InputLabel>{label}</InputLabel>
        <RowInput type={type} {...otherProps} />
      </Wrapper>
    )}
  </>
);

export default ItemForm;
