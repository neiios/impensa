import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import SignUp from "./Pages/SignUp"
import Interface from "./Pages/Interface"
import "./App.css"
const App = () => {


  return (
    <BrowserRouter basename="">
    <div className="App">
  </div>
    <Switch>
        <Route path='/Home' component={LandingPage}/>
        <Route path='/SignUp' component={SignUp}/>
        <Route path='/Interface' component={Interface}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
