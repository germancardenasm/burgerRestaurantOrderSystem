import React from "react";
import Ingredient from "../Ingredient/Ingredient";
import "./BurgerGraphic.css";

const BurgerGraphic = props => {
  const ingCompArr = Object.keys(props.ingredients)
    .map(ingType => {
      console.log("ingType", ingType);
      return [...Array(props.ingredients[ingType])].map((_, i) => {
        return <Ingredient type={ingType} key={ingType + i} />;
      });
    })
    .reduce((acc, curr) => {
      return acc.concat(curr);
    }, []);
  console.log("ingCompArr.length", ingCompArr.length);
  return (
    <div className="burger">
      <Ingredient type="bread_top" />
      {ingCompArr.length ? ingCompArr : <p>Let's add some ingredients</p>}
      <Ingredient type="bread_bottom" />
    </div>
  );
};
export default BurgerGraphic;
