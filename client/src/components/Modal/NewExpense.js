import styled from "styled-components";
import Categories from "../NewExpense/Categories";
import theme from "../../theme/Index";
import { useTransition } from "react-spring";
export const Icon = styled.i`
color: ${theme.bg.secondary};
  padding: 6px;
  border-radius: 8px;
  margin-left: auto;
  cursor: pointer;
  transition: color 1s;
  :hover {
    background: rgba(197, 199, 197, 0.3);
  }
  :active {
    background: rgba(197, 199, 197, 0.7);
  }
`;
export const Dropout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(1, 1, 1, 0.6);
`;

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid ${theme.bg.secondary};
  max-width: 100%;
  padding: 10px 10px 10px 20px;
  display: flex;
  align-items: center;
`;

const Heading = styled.h3`
color: ${theme.bg.secondary};
  margin: 0;
  font-size: 1.2em;
`;

export const ModalWrapper = styled.nav`
  transition: all 0.3s ease-out;
  background: white;
  z-index: 1133;
  border-radius: 20px;
  width: 350px;
  height: fit-content;
  position: fixed;
  margin: auto;
`;

export default function TestModal(props) {
  return (
    <>
      <Dropout onClick={props.close} />
      <ModalWrapper>
        <HeaderWrapper>
          <Heading>New expense</Heading>
          <Icon onClick={props.close} className="fas fa-times fa-xl" />
        </HeaderWrapper>
        <Categories />
      </ModalWrapper>
    </>
  );
}
