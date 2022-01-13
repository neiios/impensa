import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
//components
import Homepage from "./Pages/Homepage/index";
import SignIn from "./Pages/Authentication/signin";
import SignUp from "./Pages/Authentication/signup";
import Dashboard from "./Pages/Dashboard/dashboard";
import ModalRoot from "./components/Modal/modalRoot.jsx";
import PageNotFound from "./Pages/PageNotFound";
//styles
import GlobalStyle from "./globalStyles.jsx";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthenticated = async () => {
    try {
      const res = await fetch("/auth/verify", {
        method: "POST",
        headers: { jwtToken: localStorage.token },
      });

      const parseRes = await res.json();

      // if user's token is valid sets isAuthenticated to true
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  // this use effect runs every time component is rendered
  useEffect(() => {
    checkAuthenticated();
  }, []);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  return (
    <>
      <GlobalStyle />
      <ModalRoot />
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/signin"
            render={(props) =>
              !isAuthenticated ? (
                <SignIn {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/dashboard/overview" />
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
                <Redirect to="/dashboard/overview" />
              )
            }
          />
          <Route
            path="/dashboard"
            render={(props) =>
              isAuthenticated ? (
                <Dashboard {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/signin" />
              )
            }
          />
          <Route exact path="/" render={() => <Homepage />} />
          <Route component={PageNotFound}></Route>
        </Switch>
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
