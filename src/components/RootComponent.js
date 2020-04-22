import React, { Component } from "react";
import HeaderBar from "./headerBar/HeaderBar";
import { withRouter } from "react-router";
import "./RootComponent.css";

class RootComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeader: true,
    };
  }
  exameHoursTime = () => {
    let currentDate = new Date();
    currentDate = new Date(currentDate.setHours(currentDate.getHours() + 1));
    currentDate = currentDate.setMinutes(currentDate.getMinutes() + 5);
    return new Date(currentDate);
  };
  componentDidMount() {}
  getHeaderVisible = () => {
    if (
      this.props.history.location.pathname === "/" ||
      this.props.history.location.pathname === "/login" ||
      this.props.history.location.pathname === "/moke-test-app"
    ) {
      return false;
    }
    return true;
  };
  render() {
    const headerVisible = this.getHeaderVisible();
    return (
      <div>
        {headerVisible && (
          <HeaderBar
            timeToLogout={
              this.props.history.location.pathname === "/question-paper"
                ? this.exameHoursTime()
                : undefined
            }
            showTimer={this.props.history.location.pathname === "/question-paper"}
          />
        )}
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}

export default withRouter(RootComponent);
