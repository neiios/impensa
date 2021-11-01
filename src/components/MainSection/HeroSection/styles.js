import styled from "styled-components";

export const HeroSectionWrapper = styled.div ` 
background: ${props => (props.lightBg ? '#F6F9FC' : '#0A2540')};
display:flex;
align-items: center;
justify-content: center;
padding: 0 20px 50px 20px;
`

export const Container = styled.div ` 
max-width: 1200px;
margin-top:200px;
margin-bottom:100px;
display:flex;
flex-direction: ${props => (props.imgStart ? 'row-reverse' : 'row')};
flex-wrap:wrap;
justify-content: center;
align-content: stretch;
@media screen and (max-width:991px) {
padding: 0 10px 0 10px;
}
@media screen and (max-width:768px) {
padding: 0 10px 0 10px;
}
`

export const TextSection = styled.div ` 
color: ${props => (props.lightText ? 'white' : 'black')};
max-width:540px;
`
