import styled from "styled-components";
import { H3 } from "../../globalStyles";
import theme from "../../theme/Index";

export const TextContainer = styled.div`
  margin-top: 10px;
  justify-content: center;
  display: flex;
  gap: 20px;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const Form = styled.form`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: fit-content;
  width: 370px;
  max-width: 100%;
  border-radius: 20px;
  margin: 0 auto;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const Heading = styled(H3)`
  font-size: 1.2em;
  color: ${theme.text.grey};
  margin: auto;
  margin-top: 0px;
  margin-bottom: 35px;
`;
