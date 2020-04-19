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
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div className="quest-temp">{this.props.question.questionText}</div>
            <Radio.Group
              onChange={(e) => {
                this.props.question.selectedOption = e.value;
              }}
            >
              <div class="row question-radio">
              <div class="col-xs-12 col-sm-6 col-sm-4">
                <Radio value={1}>{this.props.question.firstOption}</Radio>
                <Radio value={2}>{this.props.question.secondOption}</Radio>
                <Radio value={3}>{this.props.question.thirdOption}</Radio>
                <Radio value={4}>{this.props.question.fourthOption}</Radio>
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
