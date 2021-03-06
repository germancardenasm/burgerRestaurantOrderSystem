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
      <p className="price">CURRENT PRICE: ${props.price.toFixed(2)}</p>
      {controlsArray}
      <button
        className="order_button"
        disabled={!props.purchaseAvailable}
        onClick={props.purchase}
      >
        PLACE YOUR ORDER
      </button>
    </div>
  );
};

export default BuildControls;
