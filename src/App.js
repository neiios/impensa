import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import SignIn from "./Pages/SignIn/SignIn"
import SignUp from "./Pages/SignUp/SignUp"
import Interface from "./Pages/Interface/Interface.js"
import "./App.css"
const App = () => {


  return (
    <BrowserRouter basename="">
    <div className="App">
  </div>
    <Switch>
        <Route path='/Home' component={LandingPage}/>
        <Route path='/Signin' component={SignIn}/>
        <Route path='/SignUp' component={SignUp}/>
        <Route path='/Interface' component={Interface}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
