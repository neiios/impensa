import styled from "styled-components";
import theme from "../../theme/Index";
export const H5 = styled.h3`
  margin: 10px 0 10px 0;
  font-size: 1.2em;
`;
export const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  margin-left: auto;
  position: relative;
  margin-top: 20px;
`;

export const InputAmount = styled.input`
  padding: 2px;
  text-align: center;
  position: absolute;
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
  width: 90%;
  margin: 20px 20px;
  color: grey;
  height: 0.02px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  gap: 75px;
`;

export const PriceSelect = styled.div`
  padding: 10px;
  position: relative;
  margin: auto;
  overflow-y: scroll;
  height: 150px;
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
    background-color: ${theme.bg.secondary};
    border: 0.3vw solid #ffffff;
    border-radius: 5vw;
  }
`;
