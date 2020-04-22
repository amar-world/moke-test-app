import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Logout.css";

class Logout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionList: [],
    };
  }

  render() {
    return (
      <div>
        <div className="red-square">
          <h1>
            Thank you for your effort!
            <span> {this.props.TaskHeader.adminUser.firstName} </span>
            <span> {this.props.TaskHeader.adminUser.lastName} </span>
          </h1>
          <p>
            {this.props.QuestionReducer.examSuccessReport.isPassed && (
              <span>
                congratulation you have scored
                <span>{this.props.QuestionReducer.examSuccessReport.totalMarks}</span>
              </span>
            )}
            {this.props.QuestionReducer.examSuccessReport.isFailed && (
              <span>
                Sorry you score is poor.You have scored
                <span>{this.props.QuestionReducer.examSuccessReport.totalMarks}</span>
                out of 100.
              </span>
            )}
            <h4>you can close the broswer</h4>
            <h4>All the best for future!!!..</h4>
          </p>
        </div>
      </div>
    );
  }
}
export default withRouter(Logout);
