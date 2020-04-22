import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./HomePage.css";
import { Button } from "antd";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionList: [],
    };
  }
  onClickOfStartTest = () => {
    this.props.history.replace("/question-paper");
    this.props.actions.setTimeToLogout();
  };

  render() {
    return (
      <div>
        <div className="red-square">
          <h1>
            Welcome
            <span> {this.props.TaskHeader.adminUser.firstName} </span>
            <span> {this.props.TaskHeader.adminUser.lastName} </span>
          </h1>
          <p>
            The Question is of total {this.props.TaskHeader.noOfHours} hours You
            get 5 minutes to read the question Paper and after time completion
            it will submit automatically
            <h4>Once you are ready with your test you can press Start Test</h4>
          </p>
          <Button style={{ float: "right" }} onClick={this.onClickOfStartTest}>
            Start Test
          </Button>
        </div>
      </div>
    );
  }
}
export default withRouter(HomePage);
