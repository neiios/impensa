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
  gap: 30px;
  @media ${device.mobileL} {
    width: 100%;
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

export const InputRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
  @media ${device.tablet} {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
  }
`;
