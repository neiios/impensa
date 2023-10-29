import styled from "styled-components";
import theme from "../../../theme/Index";
import { device } from "../../../mediaQueries";
import { StyledNavLink } from "../../../components/Button/style";

export const LinkWrapper = styled(StyledNavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.primary ? theme.color.primary : null)};
  transition: color 0.3s;
  -webkit-tap-highlight-color: transparent;
  font-size: 0.9em;
  font-weight: 600;
  color: ${theme.color.primary};
  &:hover {
    color: ${theme.color.lightPrimary};
  }
  &:active {
    color: ${theme.color.primary};
  }
  gap: 5px;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ExpenseString = styled.div`
  padding: 20px 0 20px 0;
  border-bottom: 2px solid ${theme.bg.lightestBlue};
  gap: 20px;
  align-items: center;
  display: flex;
  &:last-child {
    border: none !important;
  }
`;

export const ExpenseDate = styled.div`
  position: relative;
  font-size: 0.7em;
  font-weight: 550;
  color: grey;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  gap: 20px;
  @media ${device.laptop} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const Heading = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 1.35em;
`;

export const ViewAllContainer = styled.div`
  margin: auto;
  margin-top: 20px;
  width: fit-content;
`;
