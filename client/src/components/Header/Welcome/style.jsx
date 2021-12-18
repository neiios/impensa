import styled from "styled-components";
import theme from "../../../theme/Index";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 80px;
  gap: 20px;
  padding: 0 5px 0 5px;
`;

export const RowOne = styled.div``;
export const RowTwo = styled.div`
  display: grid;
  grid-template-areas: "button1 img button2";
  align-items: center;
  margin-bottom: 60px;
  @media (max-width: 1200px) {
    display: grid;
    grid-template-areas:
      "img img"
      "button1 button2";
    align-items: center;
  } ;
`;

export const ExploreBtn = styled.div`
  grid-area: button1;
  @media (max-width: 1200px) {
    grid-area: button1;
    margin-top: 50px;
  }
`;

export const ContactBtn = styled.div`
  grid-area: button2;
  @media (max-width: 1200px) {
    grid-area: button2;
    margin-top: 50px; //hardcoded as fuck
  }
`;

export const WelcomeHeading = styled.h1`
  margin-top: 70px;
  font-size: 3em;
`;
export const WelcomeSubheading = styled.h2`
  font-size: 1.765em;
  margin-bottom: 25px;
  color: #929091;
  font-weight: 500;
`;

export const Br = styled.br``;

// Main laptop picture in homepage

export const Embed = styled.embed`
  width: 750px;
  max-width: 100%;
  grid-area: img;
`;
