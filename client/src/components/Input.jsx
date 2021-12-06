import theme from "../theme/Index";
import styled from "styled-components";
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
