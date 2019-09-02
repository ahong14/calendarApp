import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import loginReducer from './loginReducer';

//import other reducers and store them into one combined reducer

var rootReducer = combineReducers({
    events: eventsReducer,
    login: loginReducer
});

export default rootReducer;
