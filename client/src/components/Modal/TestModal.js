import styled from "styled-components";
import Settings from "../ModalTemplates/Settings/Settings";
export const Icon = styled.i`
padding:8px;
border-radius:8px;
  float: right;
  cursor: pointer;
  transition: color 1s;
  :hover {
    background: rgba(197, 199, 197,.3);
  }
  :active {
    background: rgba(197, 199, 197,.7);
  }
`;
export const Dropout = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  position: fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(1, 1, 1, 0.5);
`

export const ModalWrapper = styled.div`
  z-index: 1133;
  margin: auto;
  width: 700px;
  height: 500px;
  border-radius: 20px;
  background: white;
  padding: 20px;
`;

export default function TestModal(props) {
  return (
    <>
    <Dropout onClick={props.close}/>
      <ModalWrapper>
        <Icon onClick={props.close} className="fas fa-times fa-xl" />
        <Settings />
      </ModalWrapper>
      </>
  );
}
