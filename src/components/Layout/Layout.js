import React from "react";
import Aux from "../../hoc/Aux";
import Navigation from "../Navigation/Navigation";
import "./Layout.css";

const Layout = props => {
  return (
    <Aux className="layout">
      <Navigation />
      <main>{props.children}</main>
    </Aux>
  );
};

export default Layout;
