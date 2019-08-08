import React, { Component } from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Sidedrawer from "../../components/Navigation/Sidedrawer/Sidedrawer";

export default class NavMenus extends Component {
  state = {
    sideShow: false
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
