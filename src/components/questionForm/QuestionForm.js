import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { map } from "lodash";
import "antd/dist/antd.css";
import "./QuestionForm.css";
import QuestionTemplate from "../questionTemplate/QuestionTemplate";
import { Button } from "antd";

class QuestionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionList: [],
      remaningTime: undefined,
    };
  }

  onSubmitOfQuestion = async (event) => {
    event.preventDefault();
    const questionData = this.props.QuestionReducer.questionList;
    const data = await this.props.actions.submitQuestionPaper(questionData);
    if(data.isSuccess){
        this.props.history.replace("/logout");
    }
  };

  componentDidMount() {
    this.props.actions.getQuestionList();
  }
  render() {
    return (
      <div>
        {map(this.props.QuestionReducer.questionList, (eachQuestion, index) => {
          return (
            <div className="question-form-block">
              <span className="question-count">{index + 1}</span>
              <div>
                <QuestionTemplate question={eachQuestion} />
              </div>
            </div>
          );
        })}
        <div className="footer">
          <Button onClick={this.onSubmitOfQuestion}>Submit</Button>
        </div>
      </div>
    );
  }
}
export default withRouter(QuestionForm);
