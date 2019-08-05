import React from "react";
import Ingredient from "../Ingredient/Ingredient";
import "./BurgerGraphic.css";

const BurgerGraphic = props => {
  console.log("props", props);
  const ingCompArr = Object.keys(props.ingredients).map(ingType => {
    console.log("ingType", ingType);
    return [...Array(props.ingredients[ingType])].map((_, i) => {
      return <Ingredient type={ingType} key={ingType + i} />;
    });
  });
  console.log("ingComArr", ingCompArr);
  return (
    <div className="burger">
      <Ingredient type="bread_top" />
      {ingCompArr}
      <Ingredient type="bread_bottom" />
    </div>
  );
};

export default BurgerGraphic;
