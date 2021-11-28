import React from "react";
import Sidebar from "../../components/Sidebar/Index";
import styled from "styled-components";
import Main from "./Main.js";
import Nav from "../../components/Sidebar/Navbar";
export const Wrapper = styled.div`
  display: flex;
`;
const Dashboard = () => {
  return (
    //FCFBFD
    <>
      <Nav />
      <Wrapper>
        <Sidebar />
        <Main />
      </Wrapper>
    </>
  );
};

export default Dashboard;
