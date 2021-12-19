import styled from "styled-components";
import theme from "../../theme/Index";
import { device } from "../../mediaQueries";
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
  @media ${device.laptop} {
    padding-bottom: 50px;
  }
`;

export const ExpenseItem = styled.div`
  min-width: 79px;
`;

export const DataContainer = styled.div`
  position: relative;
  height: fit-content;
  overflow: auto;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  min-height: 430px;
  //  height: fit-content;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${theme.bg.secondary};
  }
`;

export const FixedDataContainer = styled.div`
  overflow: auto;
  padding: 20px;
  position: relative;
  background-color: white;
  border-radius: 20px;
  height: 430px;
  //  height: fit-content;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${theme.bg.secondary};
  }
`;

export const ArchiveContainer = styled.div`
  position: relative;
  height: fit-content;
  overflow: auto;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  height: fit-content;
  overflow: auto;
  margin: 20px !important;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: fit-content;
  border: 0;
  align-items: stretch;
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
  @media ${device.tablet} {
    min-width: 100px;
    font-size: 0.9em;
  }
`;

export const ExpenseCategoryCentered = styled(ExpenseCategory)`
  margin: auto;
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
  @media ${device.tablet} {
    font-size: 1em;
  }
`;

export const HeaderContainer = styled.div`
  border-bottom: thin solid ${theme.bg.lightestBlue} !important;
  width: 100%;
  display: flex;
  align-items: center;
  border: none;
  gap: 20px;
`;

export const ExpenseWrapper = styled(HeaderContainer)`
  padding: 10px;
  border: none !important;
  gap: 20px;
`;

export const Select = styled.select`
  width: fit-content;
  font-size: 15px;
  min-width: 97px;
  height: 32px;
  font-weight: 550;
  border: thin solid ${theme.text.secondary};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.5s;
  background-color: white;
  color: ${theme.text.secondary};
`;

export const Option = styled.option`
  text-align: center;
  border: thin solid ${theme.text.secondary};
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.5s;
  background-color: white;
  color: ${theme.text.secondary};
  :hover {
    background: ${theme.text.secondary};
    color: white;
    background-size: 100%;
  }
`;

export const AlterExpense = styled.div`
  position: absolute;
  background: red;
`;

export const Icon = styled.i`
  cursor: pointer;
  :hover {
    color: ${theme.bg.secondary};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const ArrowWestIcon = styled.i`
  left: 0;
  position: absolute;
  cursor: pointer;
  color: #521111;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  transition: background-color 0.5s;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  &:hover {
    background-color: ${theme.bg.lightestBlue};
  }
  &:active {
    background-color: rgba(88, 101, 242, 0.2);
  }
`;

export const ArrowEastIcon = styled.i`
  right: 0;
  position: absolute;
  cursor: pointer;
  color: #521111;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  transition: background-color 0.5s;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  &:hover {
    background-color: ${theme.bg.lightestBlue};
  }
  &:active {
    background-color: rgba(88, 101, 242, 0.2);
  }
`;

export const MonthContainer = styled.div`
  color: #404040;
  font-size: 1.3em;
  position: absolute;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  font-weight: 550;
  @media ${device.mobileL} {
    font-size: 1em;
  }
`;

export const MonthSwitcher = styled.div`
  width: 250px;
  position: relative;
  margin: auto;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 50px;
  @media ${device.mobileL} {
    width: 200px;
  }
`;

export const NoDataBanner = styled.div``;

export const H5 = styled.h5`
  margin: 0;
  font-weight: 500;
  font-size: 0.9em;
  color: #404040;
`;

export const H4 = styled.h4`
  margin: 0;
  font-size: 0.9em;
  color: #404040;
`;

export const Input = styled.input`
  max-width: 100%;
  margin-top: 10px;
  padding: 11px 15px;
  background: #f9f9fa;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(3, 102, 214, 0.1);
  font-size: 14px;
  transition: all 0.3s ease-out;
  :focus {
    box-shadow: ${theme.bg.semiBlue} 0px 0px 0px 3px;
  }
`;

// ======================= TABLE ==========================

export const Table = styled.table`
  border-collapse: collapse;
  overflow: auto;
  margin: 0;
`;

export const TableWrapper = styled.div`
  @media ${device.mobileL} {
    height: 500px;
    width: 200px;
  }
`;

export const Colgroup = styled.colgroup``;

export const Col = styled.col``;

export const Thead = styled.thead``;

export const Tr = styled.tr`
  text-align: center;
  :hover {
    background: ${theme.bg.lightestBlue};
  }
`;

export const Th = styled.th`
  padding: 20px;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  text-align: left;
  &:last-child,
  &:first-child,
  &:nth-last-child(2) {
    text-align: center;
  }
`;

export const Tbody = styled.tbody`
  border: none !important;
`;

export const Td = styled.td`
  padding: 20px;
  text-align: left;
  &:last-child {
    margin-left: auto;
    text-align: center;
  }
`;
