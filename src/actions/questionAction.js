import * as ActionType from '../actionTypes/ActionTypes';
import questionData from '../jsonData/questionData.json';
// import axios from 'axios';

export const getQuestionList = (data) => (dispatch) => {

  const dataValue = questionData;
  // console.log(dataValue);
  dispatch({
    type: ActionType.GET_QUESTION_LIST_DATA,
    payload: dataValue
  });

  /* axios({      
   url: '../jsonData/TaskDashboard.json',
   mode: "CORS",
   method: 'GET',
   dataType: 'JSON',
   async: true,
   crossDomain: true,
   withCredentials: false,
   
 }).then(response => {
    console.log(response);
    dispatch({
      type: ActionType.GET_DASHBOARD_DATA,
      payload: []
    });
   }).catch(() => {

   }) */
  
  };

