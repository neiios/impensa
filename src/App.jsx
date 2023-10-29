import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./Pages/Homepage/index";
import SignIn from "./Pages/Authentication/signin";
import SignUp from "./Pages/Authentication/signup";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ModalRoot from "./components/Modal/modalRoot.jsx";
import PageNotFound from "./Pages/PageNotFound";

import GlobalStyle from "./globalStyles.jsx";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthenticated = async () => {
    try {
      const res = await fetch("/api/v1/auth/verify", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });

      if (res.status === 200) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };

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
      {isLoading ? null : (
        <Routes>
          <Route
            path="/signin"
            element={
              !isAuthenticated ? (
                <SignIn setAuth={setAuth} />
              ) : (
                <Navigate to="/dashboard/overview" />
              )
            }
          />
          <Route
            path="/signup"
            element={
              !isAuthenticated ? (
                <SignUp setAuth={setAuth} />
              ) : (
                <Navigate to="/dashboard/overview" />
              )
            }
          />
          <Route
            path="/dashboard/*"
            element={
              isAuthenticated ? (
                <Dashboard setAuth={setAuth} />
              ) : (
                <Navigate to="/signin" />
              )
            }
          />
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}
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
