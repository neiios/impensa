import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Wrapper, MainContainer } from "../style";
import { toast } from "react-toastify";

import Sidebar from "../../../components/Sidebar";
import Overview from "../Overview";
import Expenses from "../Expenses";
import Nav from "../Navbar";
import Banner from "../banner";
import Archive from "../Archive";
import Settings from "../Settings";
import Log from "../Log";
import Contact from "../Contact";

const Dashboard = ({ setAuth }) => {
  document.title = "Dashboard";

  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [currency, setCurrency] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  async function getProfile() {
    try {
      const res = await fetch("/api/v1/me", {
        method: "GET",
      });

      const parseData = await res.json();

      setName(parseData.username);
      setCurrency(parseData.currency);
    } catch (err) {
      console.error(err.message);
    }
  }

  async function getExpenses() {
    try {
      const res = await fetch("/api/v1/expenses", {
        method: "GET",
      });

      const parseData = await res.json();
      setExpenses(parseData);
      setIsLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getProfile();
    getCategories();
    getExpenses();
  }, []);

  async function logout(e) {
    e.preventDefault();
    try {
      const res = await fetch("/api/v1/auth/signout", {
        method: "POST",
      });

      if (res.status === 200) {
        setAuth(false);
        toast.success("Logged out successfully!");
      } else {
        throw new Error("res.status wasnt 200");
      }
    } catch (err) {
      toast.error("Error logging out. Try again.");
      console.error(err.message);
    }
  }

  async function getCategories() {
    try {
      const res = await fetch("/api/v1/categories", {
        method: "GET",
      });

      const parseData = await res.json();
      setCategories(parseData);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Wrapper>
      {isLoading === true ? null : (
        <>
          <Nav
            categories={categories}
            expenses={expenses}
            setExpenses={setExpenses}
            name={name}
          />
          <Sidebar logout={logout} />
          {expenses.length === 0 ? (
            <Banner name={name} />
          ) : (
            <>
              <MainContainer>
                <Routes>
                  <Route
                    path="overview"
                    element={
                      <Overview expenses={expenses} currency={currency} />
                    }
                  />
                  <Route
                    path="archive"
                    element={
                      <Archive
                        expenses={expenses}
                        currency={currency}
                        setExpenses={setExpenses}
                      />
                    }
                  />
                  <Route
                    path="expenses"
                    element={
                      <Expenses expenses={expenses} currency={currency} />
                    }
                  />
                  <Route
                    path="settings"
                    element={
                      <Settings
                        categories={categories}
                        setCategories={setCategories}
                        logout={logout}
                      />
                    }
                  />
                  <Route
                    path="contact"
                    element={
                      <Contact
                      />
                    }
                  />
                  <Route path="log" element={<Log />} />
                </Routes>
              </MainContainer>
            </>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default Dashboard;
