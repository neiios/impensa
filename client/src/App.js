import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard.js";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter basename="">
      <div className="App"></div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Signin" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
