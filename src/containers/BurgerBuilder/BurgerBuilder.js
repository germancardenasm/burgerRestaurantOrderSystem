import React, { Component } from "react";
import BurgerGraphic from "../../components/Burger/BurgerGraphic/BurgerGraphic";
import Aux from "../../hoc/Aux";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import prices from "../../assets/prices";
import "./BurgerBuilder.css";
import OrderSumary from "../../components/OrderSumary/OrderSumary";
import axios from "../../order-axios";
import Spinner from "../../components/UI/Spinner/Spinner";

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0
    },
    price: 2.5,
    purchaseAvailable: false,
    purchasing: false,
    loading: false
  };

  addIngredients = ing => {
    this.setState(
      (state, props) => ({
        ingredients: {
          ...state.ingredients,
          [ing]: state.ingredients[ing] + 1
        },
        price: state.price + prices[ing]
      }),
      () => this.setPurchaseAvailability()
    );
  };

  removeIngredients = ing => {
    if (this.state.ingredients[ing] === 0) return;
    this.setState(
      (state, props) => ({
        ingredients: {
          ...state.ingredients,
          [ing]: state.ingredients[ing] - 1
        },
        price: state.price - prices[ing]
      }),
      () => this.setPurchaseAvailability()
    );
  };

  setPurchaseAvailability = () => {
    const ingredients = Object.keys(this.state.ingredients).reduce(
      (acc, curr) => {
        return acc + this.state.ingredients[curr];
      },
      0
    );
    if (ingredients) {
      this.setState({ purchaseAvailable: true });
    } else {
      this.setState({ purchaseAvailable: false });
    }
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  placeOrder = () => {
    console.log("purchase");
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.price,
      customer: {
        name: "German",
        address: {
          street: "Street Colombia",
          zip: "12345",
          city: "Envigado"
        },
        email: "myemail@mail.com"
      }
    };
    axios
      .post("/orders.json", order)
      .then(res =>
        setTimeout(
          () =>
            this.setState({
              loading: false,
              purchasing: false
            }),
          1000
        )
      )
      .catch(error =>
        this.setState({
          loading: false,
          purchasing: false
        })
      );
  };

  render() {
    let orderSumary = (
      <OrderSumary
        {...this.state}
        close={this.purchaseCancelHandler}
        purchase={this.placeOrder}
      />
    );
    if (this.state.loading) {
      orderSumary = <Spinner />;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} close={this.purchaseCancelHandler}>
          {orderSumary}
        </Modal>

        <BurgerGraphic ingredients={this.state.ingredients} />
        <BuildControls
          {...this.state}
          addIngredients={this.addIngredients}
          removeIngredients={this.removeIngredients}
          purchase={this.purchaseHandler}
        />
      </Aux>
    );
  }
}
