import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import PorpsComponent from './components/PropsComponent';
import QuestionForm from "./components/questionForm/QuestionForm";

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={PorpsComponent(QuestionForm)}></Route>
        <Route exact path="/moke-test-app" component={PorpsComponent(QuestionForm)}></Route>
        <Route exact path="/moke-test" component={PorpsComponent(QuestionForm)}></Route>
        {/* <Route exact path="/createTask" component={PorpsComponent(CreateTask)}></Route>
        <Route exact path="/createProject" component={PorpsComponent(CreateProject)}></Route> */}
      </Switch>
    );
  }
}

export default AppRouter
