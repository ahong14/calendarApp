import actions from '../actions/actions';

const initialState = {
    login: false,
    phone: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.login.LOGGED_IN:
            return{
                ...state,
                login: true,
                phone: action.phone
            }

        case actions.login.LOGOUT:
            return{
                ...state,
                login: false,
                phone: ""
            }

        default:
            return state
    }
}

export default reducer;