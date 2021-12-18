import styled from "styled-components";
import theme from "../../theme/Index";
export const FeaturesContainer = styled.div`
  padding-bottom: 100px;
  padding-top: 100px;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  justify-content: center;
  margin: auto;

  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;

export const RowOne = styled.div`
  padding: 10px;
`;

export const RowOneHeading = styled.h2`
  font-size: 1.7em;
  font-weight: 700;
  padding: 0 0 15px 0;
  background-image: linear-gradient(#1767b8, ${theme.bg.secondary});
  background-repeat: no-repeat;

  /* First sizing pair (4px 50%) will define the size of the border i.e border
will be of having 4px width and 50% height. */
  /* 2nd pair will define the size of stretched background image. */
  background-size: 100px 5%, calc(100% - 80%) 100%;

  /* Similar to size, first pair will define the position of the border
and 2nd one for the container background */
  background-position: left bottom, 1px 0;
`;

export const RowOneSubheading = styled.p`
  display: flex;
  flex-direction: column;
  margin-top: -5px;
  font-size: var(--small-font-size);
  color: var(--first-color-alt);
  font-weight: 500;
`;

export const RowTwo = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  margin: auto;
  gap: 42px;
  flex-wrap: wrap;
  margin-top: 100px;
  justify-content: center;
`;

export const Br = styled.br``;
