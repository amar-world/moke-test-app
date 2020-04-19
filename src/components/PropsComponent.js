import React, { Component } from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";

export default function PorpsComponent  (ComposedComponent){

 class PorpsComponent extends Component{

    constructor(props){
        
        super(props);
        this.state={
            someData:'sdfgfds'
        }
    }

    render() {
      
        return (<ComposedComponent {...this.props}/>);
      }
}

const mapStateToProps = (state) => {
    return {
      TaskHeader: state.TaskHeader,
      QuestionReducer:state.QuestionReducer
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(ActionCreators, dispatch)
    };
  };
  
    return connect(mapStateToProps, mapDispatchToProps)(PorpsComponent);
}