import React from "react";
import Aux from "../../hoc/Aux";

const OrderSumary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(ing => {
    return (
      <li key={ing}>
        {ing}: {props.ingredients[ing]}
      </li>
    );
  });

  return (
    <Aux>
      <h4>Order Summary:</h4>
      <h5>Product: Hamburger</h5>
      <ul>{ingredientSummary}</ul>
      <p>Total: ${props.price}</p>
      <button>Checkout</button>
    </Aux>
  );
};

export default OrderSumary;
