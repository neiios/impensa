import Dropuout from "./Dropuout";
import ModalWrapper from "./ModalWrapper";
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

export default function TestModal(props) {
  return (
    <Dropuout>
      <ModalWrapper>
        <Icon onClick={props.close} className="fas fa-times fa-xl" />
        <Settings />
      </ModalWrapper>
    </Dropuout>
  );
}
