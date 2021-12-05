import styled from "styled-components";

export const Wrapper = styled.div` 
margin:auto;
width:700px;
height:500px;
border-radius:20px;
background:white;
padding:20px;

`

const  WrapperModal = (props) => {
    return (
        <Wrapper>
        { props.children }
        </Wrapper>
    );
  }

  export default WrapperModal