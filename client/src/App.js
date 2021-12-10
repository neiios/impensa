import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
//components
import LandingPage from "./Pages/LandingPage/LandingPage";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard.js";
import ModalRoot from "./components/Modal/ModalRoot.js";
import PageNotFound from "./Pages/PageNotFound";
//styles
import "./App.css";

const App = () => {
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/auth/verify", {
        method: "POST",
        headers: { jwtToken: localStorage.token },
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  return (
    <BrowserRouter basename="">
      <ModalRoot />
      <div className="App"></div>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) =>
            !isAuthenticated ? (
              <LandingPage {...props} />
            ) : (
              <Redirect to="/dashboard" />
            )
          }
        />
        {/*this is 404 route, looks bad ngl*/}
        <Route
          exact
          path="/PageNotFound"
          render={(props) => <PageNotFound {...props} setAuth={setAuth} />}
        />
        <Route
          exact
          path="/signin"
          render={(props) =>
            !isAuthenticated ? (
              <SignIn {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/dashboard" />
            )
          }
        />
        <Route
          exact
          path="/signup"
          render={(props) =>
            !isAuthenticated ? (
              <SignUp {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/dashboard" />
            )
          }
        />
        <Route
          exact
          path="/dashboard"
          render={(props) =>
            isAuthenticated ? (
              <Dashboard {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/signin" />
            )
          }
        />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
