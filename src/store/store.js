import { createStore, applyMiddleware,compose} from "redux";
import thunk from 'redux-thunk';
import rootReducer from '../reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)) 
)
export default store;
