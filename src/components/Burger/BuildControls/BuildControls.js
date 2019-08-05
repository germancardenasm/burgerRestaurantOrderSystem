import React from "react";
import Control from "../Control/Control";
import "./BuildControls.css";
const BuildControls = props => {
  return (
    <div className="build_controls">
      <Control />
      <Control />
      <Control />
    </div>
  );
};

export default BuildControls;
