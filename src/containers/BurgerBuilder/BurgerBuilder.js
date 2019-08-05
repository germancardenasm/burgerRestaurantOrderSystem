import React, { Component } from "react";
import BurgerGraphic from "../../components/Burger/BurgerGraphic/BurgerGraphic";
import Aux from "../../hoc/Aux";
import "./BurgerBuilder.css";

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      cheese: 2,
      bacon: 2,
      meat: 1
    }
  };

  render() {
    return (
      <Aux>
        <BurgerGraphic ingredients={this.state.ingredients} />
        <div>this are the ingredients Controls</div>
      </Aux>
    );
  }
}
