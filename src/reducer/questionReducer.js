import { cloneDeep} from 'lodash';
import * as ActionType from '../actionTypes/ActionTypes';

let initialState = {
    timeToLogout:undefined,
    examSuccessReport:{},
    questionList:[]
}
export const questionReducer = (state = initialState, action ) => {

    switch (action.type) {
        
        case ActionType.GET_QUESTION_LIST_DATA: {
            const newState = cloneDeep(state);
            newState.questionList = action.payload;
            return newState;
        }
        case ActionType.GET_QUESTION_SUBMIT_DATA: {
            const newState = cloneDeep(state);
            newState.questionList = [];
            newState.examSuccessReport = action.payload;
            return newState;
        }
        default:{
            return initialState;
        }
    }
}