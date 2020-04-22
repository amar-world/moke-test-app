import { cloneDeep} from 'lodash';
import * as ActionType from '../actionTypes/ActionTypes';

let initialState = {
    taskDesc:"",
    projectList:[],
    createTaskList:[]
}
export const createTaskReducer = (state = initialState, action) => {

    let newState = state;
    switch (action.type) {

        case ActionType.GET_CREATE_DROPDOWN_DATA: {
            newState = cloneDeep(state);
            // console.log(action.payload);
            newState.projectList = action.payload.projectList;
            return newState;
        }
        case ActionType.GET_CREATE_NEW_ROW_DATA: {
            newState = cloneDeep(state);
            newState.createTaskList.push(action.payload);
            return newState;
        }
        default:{
            return newState;
        }
    }
}