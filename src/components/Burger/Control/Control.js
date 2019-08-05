import React from "react";
import "./Control.css";

const Control = props => {
  return (
    <div className="control">
      <h5>SALAD</h5>
      <button className="control_button">Less</button>
      <button className="control_button">More</button>
      <p>1</p>
    </div>
  );
};

export default Control;
