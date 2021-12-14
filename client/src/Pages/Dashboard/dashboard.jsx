import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Overview from "./overview";
import Nav from "../../components/Sidebar/Navbar";
import Banner from "./banner";
import Archive from "./archive";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Wrapper, MainContainer } from "./style";
const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");
  const [expenses, setExpenses] = useState([]);

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { jwtToken: localStorage.token },
      });

      const parseData = await res.json();

      setName(parseData[0].user_name);
    } catch (err) {
      console.error(err.message);
    }
  };

  async function getExpenses() {
    try {
      const res = await fetch("http://localhost:5000/dashboard/expenses", {
        method: "GET",
        headers: { jwtToken: localStorage.token },
      });

      const parseData = await res.json();

      setExpenses(parseData);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getProfile();
    getExpenses();
  }, []);

  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
    } catch (err) {
      console.error(err.message);
    }
  };
  console.log(window.location.pathname);
  return (
    //FCFBFD
    <>
      <Wrapper>
        <BrowserRouter>
          <Nav name={name} />
          <Sidebar logout={logout} />
          <MainContainer>
            <Route
              path="/dashboard/overview"
              exact
              render={() => <Overview expenses={expenses} />}
            />
            <Route
              path="/dashboard/archive"
              exact
              render={() => <Archive expenses={expenses} />}
            />
          </MainContainer>
        </BrowserRouter>
      </Wrapper>
    </>
  );
};

/* 
        {expenses.length === 0 ? (
          <Banner name={name} />
        ) : (
          <Main expenses={expenses} />
        )}

*/
export default Dashboard;
