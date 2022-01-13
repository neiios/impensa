import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Overview from "./overview";
import Nav from "./navbar";
import Banner from "./banner";
import Archive from "./archive";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Wrapper, MainContainer } from "./style";
import Expenses from "./expenses";
import Settings from "./settings.jsx";
import { toast } from "react-toastify";

const Dashboard = ({ setAuth }) => {
  document.title = "Dashboard";

  const [name, setName] = useState("");
  const [currency, setCurrency] = useState("");
  const [expenses, setExpenses] = useState([]);

  async function getProfile() {
    try {
      const res = await fetch("/dashboard/", {
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
      const res = await fetch("/dashboard/api/expenses", {
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
      toast.success("Logged out successfully!");
    } catch (err) {
      toast.error(err.message);
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
          {expenses.length === 0 ? (
            <Banner name={name} />
          ) : (
            <>
              <MainContainer>
                <Switch>
                  <Route
                    path="/"
                    exact
                    render={(props) => <Redirect to="/dashboard/overview" />}
                  />

                  <Route path="/dashboard/overview" exact>
                    <Overview expenses={expenses} currency={currency} />
                  </Route>
                  <Route path="/dashboard/archive" exact>
                    <Archive expenses={expenses} currency={currency} />
                  </Route>
                  <Route path="/dashboard/expenses" exact>
                    <Expenses expenses={expenses} currency={currency} />
                  </Route>
                  <Route path="/dashboard/settings" exact>
                    <Settings logout={logout} />
                  </Route>
                </Switch>
              </MainContainer>
            </>
          )}
        </BrowserRouter>
      </Wrapper>
    </>
  );
};

export default Dashboard;
