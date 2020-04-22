import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import PorpsComponent from './components/PropsComponent';
import QuestionForm from "./components/questionForm/QuestionForm";
import LoginPage from "./components/loginPage/LoginPage";
import HomePage from "./components/homePage/HomePage";
import Logout from "./components/logout/Logout";

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={PorpsComponent(LoginPage)}></Route>
        <Route exact path="/login" component={PorpsComponent(LoginPage)}></Route>
        <Route exact path="/moke-test-app" component={PorpsComponent(LoginPage)}></Route>
        <Route exact path="/home" component={PorpsComponent(HomePage)}></Route>
        <Route exact path="/question-paper" component={PorpsComponent(QuestionForm)}></Route>
        <Route exact path="/logout" component={PorpsComponent(Logout)}></Route>
      </Switch>
    );
  }
}

export default AppRouter
