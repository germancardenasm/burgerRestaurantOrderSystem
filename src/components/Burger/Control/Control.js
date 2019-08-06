import React from "react";
import "./Control.css";

const Control = props => {
  return (
    <div className="control" id={props.type}>
      <span className="ing_name">{props.type}</span>
      <button className="control_button" onClick={props.removeIngredients}>
        Less
      </button>
      <button className="control_button" onClick={props.addIngredients}>
        More
      </button>
      <span className="ing_qty">{props.qty}</span>
    </div>
  );
};

export default Control;
