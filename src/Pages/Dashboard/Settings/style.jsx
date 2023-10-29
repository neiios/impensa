import styled from "styled-components";
import theme from "../../../theme/Index";
import { device } from "../../../mediaQueries";
import { Link, NavLink } from "react-router-dom";

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  display: none;
  @media ${device.laptop} {
    display: block;
  }
`;

export const HR = styled.hr`
  background: #faeaea;
  width: 200px;
  border: none;
  height: 1px;
`;

export const EmailContainer = styled.span`
  color: ${theme.bg.secondary};
`;

export const CategoriesContainer = styled.div`
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  row-gap: 0.75rem;
  column-gap: 0.5rem;
  max-width: 15rem;
  justify-content: center;
`;

export const Category = styled.span`
  cursor: pointer;
  background-color: ${theme.bg.lightestBlue};
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 600;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${theme.bg.lightestBlueAlt};
  }
`;

export const Hint = styled.p`
  margin: 0;
`;

export const RemoveAccount = styled.span`
  cursor: pointer;
  font-size: 0.75rem;
  color: red;
  &:hover {
    text-decoration: underline;
  }
`;

export const SelectContainer = styled.div`
  width: 100%;
`;

export const UserLog = styled(Link)`
  cursor: pointer;
  font-size: 0.75rem;
  color: #238fd2;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
