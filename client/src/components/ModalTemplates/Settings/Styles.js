import styled from "styled-components";
import theme from "../../../theme/Index";
/*
        Settings 
|   Inputs  |    PP   |
|           |         |
|           |         |
|           |         |
*/

export const Input = styled.input`
  outline: ${(props) => (props.readonlyInput ? "none" : "initial")};
  pointer-events: ${(props) => (props.readonlyInput ? "none" : "inherit")};
  border: ${(props) =>
    props.readonlyInput
      ? "1px solid transparent"
      : "1px solid rgba(3, 102, 214, 0.1)"};
  margin-left: 120px;
  padding: 5px;
  position: absolute;
  width: 200px;
  height: 20px;
  border-radius: 4px;
  outline: 0;
  font-size: 14px;
  transition: all 0.3s ease-out;
  :focus {
    //  box-shadow: ${theme.bg.semiBlue} 0px 0px 0px 2px;
    box-shadow: ${(props) =>
      props.readonlyInput ? "none" : theme.bg.semiBlue + "0px 0px 0px 2px"};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 100px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Heading = styled.h2`
  margin-top: -25px;
`;

export const InputSection = styled.div`
  gap: 25px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.3s ease-out;
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  border: thin dashed transparent;
  :hover {
    border: thin dashed black;
  }
`;

export const PictureContainer = styled.div`
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
`;

export const OnPictureContainer = styled.div`
  position: absolute;
  top: 200px;
`;

export const Label = styled.label`
  font-size: 0.8em;
  font-weight: 700;
`;

export const Subheading = styled.h3`
  font-size: 1.2em;
`;

export const H4 = styled.h4`
  margin: 0;
`;

export const Span = styled.span``;

export const DropoutSection = styled(InputSection)`
  gap: 10px;
`;

export const LanguageSelector = styled(InputSection)`
  flex-direction: row;
`;

export const HeadingContainer = styled.div`
  margin: 1px 0 -10px 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const PenIcon = styled.i`
  margin-left: 10px;
`;

export const ModifyButtons = styled.div`
  display: flex;
  display: ${({ click }) => (click ? "none" : "block")};
  gap: 5px;
`;

export const SmallBtn = styled.button`
  letter-spacing: 0.5px;
  cursor: pointer;
  background: ${(props) =>
    props.primary ? theme.bg.lightestBlue : theme.bg.semiBlue};

  color: ${(props) => (props.primary ? "black" : "white")};
  padding: 3px 6px 3px 6px;
  border-radius: 10px;
  border: none;
  width: fit-content;
  height: fit-content;
  font-size: 0.86em !important;
  transition: background 0.3s;
  :hover {
    color: ${(props) => (props.primary ? "white" : "black")};
    background: ${(props) =>
      props.primary ? theme.bg.semiBlue : theme.bg.lightestBlue};

    :active {
      opacity: 1;
    }
  }
`;

export const Icon = styled.i`
  position: absolute;
  margin-left: 310px;
  z-index: 100;
  color: ${theme.bg.secondary};
`;

export const PictureSelect = styled.input`
  border-radius: 20px;
  position: absolute;
  width: 100px;
  height: 50px;
  top: 250px;
`;
