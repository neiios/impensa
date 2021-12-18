import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Overview from "./overview";
import Nav from "../../components/Sidebar/Navbar";
import Banner from "./banner";
import Archive from "./archive";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Wrapper, MainContainer } from "./style";
import Expenses from "./expenses";
import PageNotFound from "../PageNotFound";
import Settings from "./settings.jsx";

const Dashboard = ({ setAuth }) => {
  document.title = "Impensa - dashboard";

  const [name, setName] = useState("");
  const [currency, setCurrency] = useState("");
  const [expenses, setExpenses] = useState([]);

  async function getProfile() {
    try {
      const res = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { jwtToken: localStorage.token },
      });

      const parseData = await res.json();

      setName(parseData[0].user_name);
      setCurrency(parseData[0].user_currency);
    } catch (err) {
      console.error(err.message);
    }
  }

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

  async function logout(e) {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    //FCFBFD
    <>
      <Wrapper>
        <BrowserRouter>
          <Nav name={name} />
          <Sidebar logout={logout} />
          <MainContainer>
            <Switch>
              <Route path="/dashboard/overview" exact>
                {expenses.length === 0 ? (
                  <Banner name={name} />
                ) : (
                  <Overview expenses={expenses} currency={currency} />
                )}
              </Route>
              <Route path="/dashboard/archive" exact>
                {expenses.length === 0 ? (
                  <Banner name={name} />
                ) : (
                  <Archive expenses={expenses} currency={currency} />
                )}
              </Route>
              <Route path="/dashboard/expenses" exact>
                {expenses.length === 0 ? (
                  <Banner name={name} />
                ) : (
                  <Expenses expenses={expenses} currency={currency} />
                )}
              </Route>
              <Route path="/dashboard/settings" exact>
                {expenses.length === 0 ? (
                  <Banner name={name} />
                ) : (
                  <Settings logout={logout} />
                )}
              </Route>
              <Route component={PageNotFound}></Route>
            </Switch>
          </MainContainer>
        </BrowserRouter>
      </Wrapper>
    </>
  );
};

export default Dashboard;
