import styled from "styled-components";
import { H3 } from "../../globalStyles";
import theme from "../../theme/Index";
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

export const Heading = styled(H3)`
  font-size: 1.2em;
  color: ${theme.text.grey};
  margin: auto;
  margin-top: 0px;
  margin-bottom:35px;
`;

export const InputLabel = styled.label`
  color: ${theme.text.grey};
  background: #ffffff;
  font-size: 0.8em;
  font-weight: 600;
  letter-spacing: 0.03em;
`;
// container with "Have an account? Sign in"
export const StringContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2em;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

export const Span = styled.span`
  font-size: 0.5em;
  font-weight: 700;
`;

export const Hr = styled.hr`
  opacity: 0.2;
  width: 70px;
  border: none;
  height: 0.5px;
  background-color: black;
  margin: 10px;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
