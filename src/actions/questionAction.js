import * as ActionType from "../actionTypes/ActionTypes";
import { CONSTANTS } from "../config/config";
import axios from "axios";

export const getQuestionList = (data) => (dispatch) => {
  const url = CONSTANTS.URL + "allTestQuestion";
  axios({
    url: url,
    method: "GET",
    dataType: "JSON",
  })
    .then((response) => {
      // console.log(response);
      dispatch({
        type: ActionType.GET_QUESTION_LIST_DATA,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
export const submitQuestionPaper = (data) => (dispatch) => {
  const questionSubmit = new Promise((resolve, reject) => {
    const url = CONSTANTS.URL + "submitTestQuestions";
    axios({
      url: url,
      method: "POST",
      dataType: "JSON",
      data: data,
    })
      .then((response) => {
        // console.log(response);
        dispatch({
          type: ActionType.GET_QUESTION_SUBMIT_DATA,
          payload: response.data,
        });
        resolve({isSuccess:true});
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return questionSubmit;
};
