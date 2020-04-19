import { combineReducers } from "redux";
import {questionReducer} from './questionReducer';
import {taskHeaderReducer} from './taskHeaderReducer';

const rootReducer = combineReducers({
    QuestionReducer:questionReducer,
    TaskHeader:taskHeaderReducer
});

export default rootReducer;