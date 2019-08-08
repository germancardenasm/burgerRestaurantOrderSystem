import React from "react";
import NavItems from "../NavItems/NavItems";
import Logo from "../../UI/Logo/Logo";
import ToogleBtn from "../../UI/ToogleBtn/ToogleBtn";
import "./Toolbar.css";

const Navbar = props => {
  return (
    <header className="toolbar">
      <ToogleBtn click={props.toogle} />
      <Logo />
      <nav className="desktop_nav">
        <NavItems />
      </nav>
    </header>
  );
};

export default Navbar;
