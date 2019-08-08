import React, { Component } from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer";

export default class Navigation extends Component {
  state = {
    sideShow: true
  };

  toogleSidedrawer = () => {
    this.setState(prevState => ({
      sideShow: !prevState.sideShow
    }));
  };

  render() {
    return (
      <div className="navigation">
        <Sidedrawer show={this.state.sideShow} toogle={this.toogleSidedrawer} />
        <Toolbar toogle={this.toogleSidedrawer} />
      </div>
    );
  }
}
