import React from "react";
import Button from "../../UI/Button/Button";
import "./Control.css";

const Control = props => {
  return (
    <div className="control" id={props.type}>
      <span className="ing_name bold">{props.type}</span>
      <Button className="control_button" click={props.removeIngredients}>
        Less
      </Button>
      <Button className="control_Button" click={props.addIngredients}>
        More
      </Button>
      <span className="ing_qty bold">{props.qty}</span>
    </div>
  );
};

export default Control;
