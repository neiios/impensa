import styled from "styled-components";
import { device } from "../../mediaQueries";
export const GraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 90%;
  height: 350px !important;
  margin: 10px;
  @media ${device.mobileL} {
    width: 80%;
    height: 320px !important;
  }
`;

export const H4 = styled.h4`
  color: grey;
  font-size: 0.8em;
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: 500;
`;

export const H3 = styled.h4`
  margin: 0;
  font-size: 0.9em;
`;

export const TextContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  gap: 5px;
  font-size: 0.8em;
  margin-left: auto;
  color: grey;
`;

export const H6 = styled.h6``;

export const DoughnutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px !important;
  height: 350px !important;

  max-width: 380px;
  margin: auto;
`;
