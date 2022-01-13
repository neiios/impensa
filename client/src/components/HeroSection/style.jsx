import styled from "styled-components";
import theme from "../../theme/Index";
import { device } from "../../mediaQueries";

export const HeroSectionWrapper = styled.div`
  background: ${(props) => (props.lightBg ? "#F6F9FC" : theme.bg.secondary)};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px 50px 20px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin-top: 200px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: ${(props) => (props.imgStart ? "row-reverse" : "row")};
  flex-wrap: wrap;
  justify-content: center;
  align-content: stretch;
  gap: 50px;
  @media ${device.laptop} {
    padding: 0 10px 0 10px;
  }
`;

export const TextSection = styled.div`
  color: ${(props) => (props.lightText ? "white" : theme.color.secondary)};
  max-width: 540px;
`;

export const TextSubSection = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const P = styled.p`
  font-size: 1em;
`;

export const H3 = styled.h3``;

export const Icon = styled.i``;

export const Embed = styled.embed`
  width: 400px;
  max-width: 100%;
  vertical-align: middle;
  image-rendering: auto;
`;
