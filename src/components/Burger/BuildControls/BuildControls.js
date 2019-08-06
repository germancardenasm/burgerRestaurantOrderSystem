import React from "react";
import Control from "../Control/Control";
import "./BuildControls.css";
const BuildControls = props => {
  const controlsArray = Object.keys(props.ingredients).map(ingType => {
    return (
      <Control
        type={ingType}
        qty={props.ingredients[ingType]}
        key={ingType}
        addIngredients={() => props.addIngredients(ingType)}
        removeIngredients={() => props.removeIngredients(ingType)}
      />
    );
  });

  return (
    <div className="build_controls">
      <p>Current Price: ${props.price.toFixed(2)}</p>
      {controlsArray}
    </div>
  );
};

export default BuildControls;
