import actions from '../actions/actions';

const initialState = {
    login: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.login.LOGGED_IN:
            return{
                ...state,
                login: true
            }

        default:
            return{
                ...state
            }
    }
}

export default reducer;