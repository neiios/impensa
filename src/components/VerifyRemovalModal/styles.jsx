import styled from "styled-components";
import theme from "../../theme/Index";

export const ContentWrapper = styled.form`
  height: fit-content;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 15px;
`;

export const CloseModal = styled.i`
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

export const Headline = styled.h4`
  font-size: 1.3em;
  margin: 0;
  margin-right: auto;
`;

export const InputField = styled.div`
  width: 100%;
  position: relative;
  margin: 10px 0 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 11px 15px;
  background: #f9f9fa;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(3, 102, 214, 0.1);
  font-size: 14px;
  transition: all 0.3s ease-out;
  &:focus {
    box-shadow: ${theme.bg.semiBlue} 0px 0px 0px 3px;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

export const StyledButton = styled.button`
  /* width: 100%; */
  padding: 0.5rem;
  width: 85px;
  color: #fff;
  border: none;
  font-weight: 600;
  border-radius: 4px;
`;

export const SaveButton = styled(StyledButton)`
  background-color: ${theme.color.primary};
`;

export const DeleteButton = styled(StyledButton)`
  background-color: #f25865;
`;
