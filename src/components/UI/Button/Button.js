import React from "react";
import "./Button.css";

const Button = props => {
  return (
    <button className={["button", props.type].join(" ")} onClick={props.click}>
      {props.children}
    </button>
  );
};

export default Button;