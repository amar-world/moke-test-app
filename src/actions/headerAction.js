import * as ActionType from "../actionTypes/ActionTypes";
import { CONSTANTS } from "../config/config";
import axios from "axios";

export const setTimeToLogout = (data) => (dispatch) => {
  dispatch({
    type: ActionType.SET_LOGOUT_TIME,
    payload: 1,
  });
}
export const checkLoginCredential = (data) => (dispatch) => {
  
  const loginReturn = new Promise((resolve, reject) => {
    const url = CONSTANTS.URL + "login";
    axios({
      url: url,
      method: "POST",
      dataType: "JSON",
      data: data,
    })
      .then((response) => {
        // console.log(response);
        dispatch({
          type: ActionType.LOGIN_SUCCESSFUL_DATA,
          payload: response.data,
        });
        resolve({isSuccess:true});
      })
      .catch((error) => {
        reject({isSuccess:false});
        console.log(error);
      });
  });
  return loginReturn;
};
