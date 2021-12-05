import Dropuout from "./Dropuout";
import ModalWrapper from "./ModalWrapper"
import styled from "styled-components";
import Settings from "../ModalTemplates/Settings/Settings";
export const Icon = styled.i` 
float:right;
cursor: pointer;
transition: color 1s;
:hover {
    color: green;
}
`

export default function TestModal(props) {
  return (
    <Dropuout>
        <ModalWrapper> 
        <Icon  onClick={ props.close } className="fas fa-times"/>
      <Settings/>
      </ModalWrapper>
    </Dropuout>
  );
}