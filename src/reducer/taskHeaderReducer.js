import { cloneDeep} from 'lodash';
import * as ActionType from '../actionTypes/ActionTypes';

const exameHoursTime= ()=>{
    let currentDate = new Date();
    currentDate = new Date(currentDate.setHours(currentDate.getHours() + 1));
    currentDate = currentDate.setMinutes(currentDate.getMinutes() + 5);
    return new Date(currentDate);
}

let initialState = {
    timeToLogout:undefined,
    adminUser:{},
    token:""
}
export const taskHeaderReducer = (state = initialState, action) => {

    let newState = state;
    switch (action.type) {
        case ActionType.LOGIN_SUCCESSFUL_DATA:{
            newState = cloneDeep(state);
            newState.adminUser = action.payload.user;
            newState.token = action.payload.token;
            return newState;
        }
        case ActionType.GET_ADMIN_USER_DATA:{
            newState = cloneDeep(state);
            newState.adminUser = action.payload;
            return newState;
        }
        case ActionType.GET_DASHBOARD_DATA: {
            newState = cloneDeep(state);
            newState.taskList = action.payload;
            return newState;
        }
        case ActionType.SET_LOGOUT_TIME: {
            newState = cloneDeep(state);
            newState.logoutTimeRemaning = exameHoursTime();
            return newState;
        }
        default:{
            return newState;
        }
    }
}