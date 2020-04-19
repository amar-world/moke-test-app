import * as ActionType from "../actionTypes/ActionTypes";

export const getHeaderData = (data) => (dispatch) => {
  const newData = {
   userName:"amarjeet",
   userType:"Developer"
  };
  dispatch({
    type: ActionType.GET_HEADER_DATA,
    payload: newData,
  });
};

