import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../actions";

import "./HeaderBar.css";
// const { Header } = Layout;

class HeaderBar extends Component {
  // history = useHistory();
  constructor(props) {
    super(props);
    this.state = {
      headerVisible: true,
    };
  }

  onMenuClick = (event) => {
    const { history } = this.props;
    const sPath = event.key;
    history.push(`/${sPath}`);
  };

  render() {
    // const menu = (
    //   <Menu onClick={this.onMenuClick}>
    //     <Menu.Item key="dashboard">Dashbord</Menu.Item>
    //     <Menu.Item key="createTask">Create Task</Menu.Item>
    //     <Menu.Item key="createProject">Create Project</Menu.Item>
    //   </Menu>
    // );
    return (
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      {/* eslint-disable-next-line */}
      <span class="navbar-brand" href="#">Mock Test paper</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      {/* <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Kajal Kumari</a>
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
    TaskHeader: state.TaskHeader,
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
