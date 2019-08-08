import React from "react";
import Aux from "../../../hoc/Aux";
import NavItem from "./NavItem/NavItem";
import "./NavItems.css";

const NavItems = () => {
  return (
    <Aux>
      <ul className="nav_items">
        <NavItem>One</NavItem>
        <NavItem>Two</NavItem>
        <NavItem>Three</NavItem>
      </ul>
    </Aux>
  );
};

export default NavItems;
