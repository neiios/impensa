import styled from "styled-components";
import theme from "../../theme/Index";
export const Wrapper = styled.div`
  display: flex;
`;
export const MainContainer = styled.div`
  z-index: -1;
  margin-top: 75px;
  margin-right: 20px;
  margin-left: 20px;
  z-index: 100;
  width: 100%;
  background-color: ${theme.bg.lightestBlue};
  min-height: 100vh;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ExpenseItem = styled.div`
  min-width: 79px;
`;

export const DataContainer = styled.div`
  padding: 20px;
  position: relative;
  background-color: white;
  border-radius: 20px;
  height: 550px;
  border: thin solid ${theme.bg.semiBlue};
`;

export const ArchiveContainer = styled(DataContainer)`
  margin: 20px !important;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: fit-content;
  align-items: center;
`;

export const OneExpenseContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;
  border-bottom: 2px solid ${theme.bg.lightestBlue};
  &:last-child {
    border-bottom: none;
  }
  :hover {
    background: ${theme.bg.lightestBlue};
    :last-child {
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
`;

export const DateContainer = styled.div``;

export const ExpenseCategory = styled.div`
  text-align: center;
  min-width: 150px;
  margin-left: auto;
  width: fit-content;
  background: ${theme.bg.secondary};
  color: white;
  padding: 8px;
  font-size: 1.2em;
  border-radius: 10px;
`;

export const ExpenseDescription = styled.div`
  font-style: italic;
  text-transform: capitalize;
  width: fit-content;
  color: black;
  padding: 8px;
  font-size: 1em;
  border-radius: 10px;
`;

export const H3 = styled.h3`
  margin: 15px;
  font-size: 1.6em;
`;

export const HeaderContainer = styled.div`
  border-bottom: thin solid ${theme.bg.secondary} !important;
  width: 100%;
  display: flex;
  align-items: center;
  border: none;
`;

export const ExpenseWrapper = styled(HeaderContainer)`
  padding: 10px;
  border: none !important;
  gap: 20px;
`;
