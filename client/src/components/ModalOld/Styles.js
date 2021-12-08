import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { createGlobalStyle } from "styled-components";
export const Background = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ModalWrapper = styled.div`
  max-width: 1000px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 991px) {
    max-width: 500px;
    max-height: 100vh;
  }
`;

export const ModalImg = styled.img`
  width: 50%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    overflow-y: hidden !important;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;
