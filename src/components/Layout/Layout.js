import React from "react";
import Aux from "../../hoc/Aux";
import "./Layout.css";

const Layout = props => {
  return (
    <Aux>
      <div className="navbar">[NAVBAR] logo burger orders checkout</div>
      <main>{props.children}</main>
    </Aux>
  );
};

export default Layout;
