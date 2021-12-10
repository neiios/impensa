import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Index";
import styled from "styled-components";
import Main from "./Main.js";
import Nav from "../../components/Sidebar/Navbar";
import Banner from "./Banner";
export const Wrapper = styled.div`
  display: flex;
`;

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

  return (
    //FCFBFD
    <>
      <Nav name={name} />
      <Wrapper>
        <Sidebar logout={logout} />
        {expenses.length === 0 ? (
          <Banner name={name} />
        ) : (
          <Main expenses={expenses} />
        )}
      </Wrapper>
    </>
  );
};

export default Dashboard;
