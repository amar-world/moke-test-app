import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../actions";
import ReactMomentCountDown from "react-moment-countdown";

import "./HeaderBar.css";
// const { Header } = Layout;

class HeaderBar extends Component {
  // history = useHistory();
  constructor(props) {
    super(props);
    this.state = {
      headerVisible: true,
      remaningTime: undefined,
    };
  }
  onMenuClick = (event) => {
    const { history } = this.props;
    const sPath = event.key;
    history.push(`/${sPath}`);
  };
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <span className="navbar-brand">Mock Test paper</span>
        {this.props.showTimer && (
          <ReactMomentCountDown className="time-count-down" toDate={this.props.timeToLogout}  />
          // <span className="navbar-brand">{this.state.remaningTime}</span>
        )}
        {/*<button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
         <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Kajal Kumari</a>
          </li>
        </ul>
        </div>
        */}
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    TaskHeader: state.TaskHeader
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeaderBar)
);
