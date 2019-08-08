import React from "react";
import logo from "../../../assets/images/burger-logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Burger Logo" />
    </div>
  );
};

export default Logo;
