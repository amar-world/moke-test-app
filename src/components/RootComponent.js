import React, { Component } from "react";
import HeaderBar from "./headerBar/HeaderBar";
import { withRouter } from "react-router";
import "./RootComponent.css";

class RootComponent extends Component {
  constructor(props) {
    super(props);
    console.log(`i m in root page and my props are ${props}`);
  }

  render() {
    return (
      <div>
        <HeaderBar />
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}

export default withRouter(RootComponent);