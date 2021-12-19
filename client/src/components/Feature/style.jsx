import styled from "styled-components";
import theme from "../../theme/Index";
import { device } from "../../mediaQueries";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  height: 250px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 15px;
  padding: 10px;
  text-align: center;
  transition: margin-top 0.2s;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  :hover {
    margin-top: -20px;
  }
  @media ${device.tablet} {
    :hover {
      margin-top: 0px;
    }
  }
`;

export const Heading = styled.h4`
  font-size: 0.9em;
  color: ${theme.text.secondary};
  font-weight: 600;

  margin-bottom: -5px;
`;

export const Icon = styled.i`
  margin-top: 50px;
  color: ${theme.bg.secondary};
`;

export const P = styled.p`
  color: #425466;
`;
