import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';

//import other reducers and store them into one combined reducer

var rootReducer = combineReducers({
    events: eventsReducer
});

export default rootReducer;
