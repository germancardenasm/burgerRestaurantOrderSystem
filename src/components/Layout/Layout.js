import React from "react";
import Aux from "../../hoc/Aux";
import NavMenus from "../../containers/NavMenus/NavMenus";
import "./Layout.css";

const Layout = props => {
  return (
    <Aux className="layout">
      <NavMenus />
      <main>{props.children}</main>
    </Aux>
  );
};

export default Layout;
