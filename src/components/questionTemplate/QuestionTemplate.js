import React, { Component } from "react";
import "antd/dist/antd.css";
import "./QuestionTemplate.css";
import { Radio } from "antd";
import { withRouter } from "react-router-dom";

class QuestionTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
    };
  }

  render() {
    return (
      <div >
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <div className="quest-temp">{this.props.question.questText}</div>
            <Radio.Group
              onChange={(e) => {
                this.props.question.solutionKey = e.target.value;
              }}
            >
              <div className="row question-radio">
              <div className="col-xs-12 col-sm-6 col-sm-4">
                <Radio value={"A"}>{this.props.question.firstOption}</Radio>
                <Radio value={"B"}>{this.props.question.secondOption}</Radio>
                <Radio value={"C"}>{this.props.question.thirdOption}</Radio>
                <Radio value={"D"}>{this.props.question.fouthOption}</Radio>
              </div>
              </div>
            </Radio.Group>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(QuestionTemplate);
