import React, { Component } from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import RootComponent from "./components/RootComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState: false,
    };
  }
  render() {
    return (
      <div>
        <RootComponent>
          <AppRouter />
        </RootComponent>
      </div>
    );
  }
}

export default App;
