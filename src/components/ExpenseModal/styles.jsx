import styled from "styled-components";
import theme from "../../theme/Index";

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
  cursor: pointer;
  padding: 0.5rem;
  color: #fff;
  border: none;
  font-weight: 600;
  border-radius: 4px;
  transition: opacity 0.2s ease-in;
  &:hover {
    opacity: 0.8;
  }
`;

export const SaveButton = styled(StyledButton)`
  background-color: ${theme.color.primary};
  margin-left: auto;
  position: relative;
  margin-top: 20px;
`;

export const DeleteButton = styled(StyledButton)`
  background-color: #f25865;
`;

export const H5 = styled.h3`
  margin: 15px 0 15px 0;
  font-size: 1em;
`;

export const TextArea = styled.textarea`
  resize: none;
  box-sizing: border-box;
  height: 150px;
  max-width: 100%;

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

export const ButtonContainer = styled.div`
  margin-left: auto;
  position: relative;
  margin-top: 20px;
`;

export const InputAmount = styled.input`
  box-sizing: border-box;
  padding: 2px;

  right: 20px;
  min-width: 1px;
  max-width: 50px;
  outline: none;
  border: none;
  border-bottom: thin solid grey !important;
`;

export const Label = styled.label``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Li = styled.li`
  background-color: ${theme.bg.lightestBlue};
  color: ${theme.bg.secondary};
  font-size: 0.8em;
  font-weight: 550;
  width: fit-content;
  padding: 8px;
  border-radius: 10px;
  margin-top: 10px;
`;

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const HR = styled.hr`
  align-self: center;
  height: 1px;
  border: none;
  width: 90%;
  margin: 20px 20px;
  background-color: ${theme.bg.secondary};
`;

export const HeadingContainer = styled.div`
  font-size: 0.8em;
  display: flex;
  gap: 110px;
  margin-left: 40px;
`;

export const PriceSelect = styled.div`
  width: 250px;
  padding: 10px;
  position: relative;
  margin: auto;
  overflow-y: scroll;
  /* STYLING SCROLLBAR */

  ::-webkit-scrollbar {
    width: 1vw; /* THIS WILL RESET THE DEFAULT SCORLLBAR STYLING */
  }

  /* TO STYLE THE SCROLLBAR TRACK */
  ::-webkit-scrollbar-track {
    background-color: #ffffff; /* THIS WILL SET THE COLOR OF THE SCROLLBAR TRACK */
  }

  /* TO STYLE THE SCROLLBAR THUMB */
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.bg.semiBlue};
    border: 0.3vw solid #ffffff;
    border-radius: 5vw;
  }
`;

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;
`;

export const ContentWrapper = styled.form`
  height: fit-content;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 15px;
`;
