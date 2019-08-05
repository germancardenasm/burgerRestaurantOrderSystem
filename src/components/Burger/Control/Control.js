import React from "react";
import "./Control.css";

const Control = props => {
  return (
    <div className="control">
      <span className="ing_name">{props.type}</span>
      <button className="control_button">Less</button>
      <button className="control_button">More</button>
      <span className="ing_qty">{props.qty}</span>
    </div>
  );
};

export default Control;
