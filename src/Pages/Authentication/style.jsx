import styled from "styled-components";
import theme from "../../theme/Index";
import { device } from "../../mediaQueries";
export const TextContainer = styled.div`
  justify-content: center;
  display: flex;
  gap: 10px;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
  gap: 25px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  gap: 30px;
`;

export const SigninContainer = styled.form`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 20px;
  margin: 0 auto;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  gap: 30px;
  min-width: 350px;
  width: fit-content;
  @media ${device.mobileL} {
    min-width: 0;
  }
`;

export const Heading = styled.h3`
  font-size: 1.2em;
  color: ${theme.text.grey};
  margin: auto;
  margin-top: 0px;
  margin-bottom: 10px;
`;

export const SelectContainer = styled.div`
  width: 100%;
  gap: 5px;
  display: flex;
  flex-direction: column;
`;
