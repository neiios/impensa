import React from "react";
import { Fragment } from 'react';
import Welcome from "./Welcome/index.jsx";
import Navigation from "./Navigation/index.jsx";

const Header = () => {
  return (
    <Fragment>
      <Navigation />
      <Welcome />
    </Fragment>
  );
};

export default Header;
