import React from 'react'
import "./SignIn.css"
import Logo from "../components/Logo/index"
import Button from "../components/Button/index"
import LinkStyled from "../components/LinkStyled"
const SignIn = () => {
    return (
        <div className="main-wrapper">
        <Logo/>
             <div className="SignIn-div">
             <h1 className="h1-signin">Sign in to your account</h1>
             <div className="email-input">
                <label className="label1 mail" htmlFor="emain">Email</label>
                <input className="sign-input" type="text" />
             </div>
             <div className="password-input">
                    <label className="label2" htmlFor="Password">Password</label>
                    <LinkStyled name="Forgot password?"/>
                    <input className="sign-input pass" type="text" />
                </div>
                      <Button className="button-signin" name="Continue" width="315px" height="40px"/>
        
              </div>
        </div>

    )
}

export default SignIn
