import actions from '../actions/actions';

const initialState = {
    events: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        //update store state for events after getting response from server
        case actions.events.GET_EVENTS: 
            return{
                ...state,
                events: action.events
            }

        case actions.events.CLEAR_EVENTS:
            return{
                ...state,
                events: []
            }

        default: 
            return state
    }
}

export default reducer;