import React from 'react'
import styled from 'styled-components'
import theme from '../../theme/Index'
import {SmallContainer, MidContainer, WideContainer} from '../../components/ContentContainer/Index'

// Wraps Sidebar Nav and Main-Conent
export const Wrapper = styled.div `
background-color: ${theme.bg.semiBlue};
max-width:100%;
height:100vh;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
`
// Has all Main-block elements
export const Container = styled.div `
padding:20px;
display:grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
gap:20px;
`
// Wraps 
export const SubContainer = styled.div `
display:grid;
grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
grid-template-rows: 1fr 1fr;
gap:20px;
`

export const LargeContainer = styled.div `
display:grid;
grid-template-columns: 1fr .5fr;
gap:20px;
padding:20px;
`

const Main = () => {
    return (
        <Wrapper>
        <Container>
        <MidContainer>
            <h4>Total earned</h4>
            <h3>$523</h3>
        </MidContainer>
        <MidContainer>
            <h4>Total spent</h4>
            <h3>$213</h3>
        </MidContainer>
        <SubContainer>
        <SmallContainer>
            222k
            Set Income
        </SmallContainer>
        <SmallContainer>
            222k
            Average Expenditure
        </SmallContainer>
        </SubContainer>
        </Container>
        <LargeContainer>
            <WideContainer>
            </WideContainer>
            <WideContainer>
            </WideContainer>
        </LargeContainer>
        </Wrapper>
    )
}

export default Main
