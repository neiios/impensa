import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import "./App.css"

const App = () => {
  return (
    <div className="App">
    <BrowserRouter basename="/impensa-budgeting-app">
        <Route path='/' component={LandingPage}/>
        <Route path='/SignIn' component={SignIn}/>
        <Route path='/SignUp' component={SignUp}/>
        <h1>obama</h1>
      </BrowserRouter>
      </div>
  );
}

export default App;
