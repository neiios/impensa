import React from 'react'
import {Wrapper, Form, Input, Heading, InputLabel, StringContainer, InputWrapper} from "./Styles.js"
import {  WideButton, ModifiedLink } from '../../components/Button/index.js'

// add location to identify currency
const SignUp = () => {
    return (
        <Wrapper>
            <Form>
            <Heading>Create your Impensa account</Heading>
            <InputWrapper>
                <StringContainer>
                <InputLabel>Email</InputLabel>
                </StringContainer>
                <Input
                type="email"
                name="email"
            />
                  <StringContainer>
                <InputLabel>Full name</InputLabel>
                </StringContainer>
                <Input
                type="name"
                name="name"
            />
                          <StringContainer>
                <InputLabel>Password</InputLabel>
                </StringContainer>
                <Input
                type="password"
                name="password"
            />
          </InputWrapper>
          <WideButton style={{margin:"auto"}}>Create account</WideButton>
          <StringContainer primary
            >Have an account?
            <ModifiedLink style={{color:"#635BFF"}} to="/SignIn">Sign in</ModifiedLink>
          </StringContainer>

            </Form>
        </Wrapper>
    )
}

export default SignUp
