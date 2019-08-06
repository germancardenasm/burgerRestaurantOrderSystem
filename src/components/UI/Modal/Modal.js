import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";
import "./Modal.css";

const Modal = props => {
  return (
    <Aux>
      <Backdrop show={props.show} close={props.close} />
      <div
        className="modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default Modal;
