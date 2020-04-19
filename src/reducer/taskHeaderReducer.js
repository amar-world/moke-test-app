import { cloneDeep} from 'lodash';
import * as ActionType from '../actionTypes/ActionTypes';

let initialState = {
    UserName:'Amarjeet'
}
export const taskHeaderReducer = (state = initialState, action) => {

    let newState = state;
    switch (action.type) {

        case ActionType.GET_DASHBOARD_DATA: {
            newState = cloneDeep(state);
            newState.taskList = action.payload;
            return newState;
        }
        default:{
            return newState;
        }
    }
}