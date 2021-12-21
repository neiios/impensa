import React from "react";
import Welcome from "./Welcome/index.jsx";
import Navigation from "./Navigation/index.jsx";
const Header = () => {
  return (
    <>
      <Navigation />
      <Welcome />
    </>
  );
};

export default Header;
