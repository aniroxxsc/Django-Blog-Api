import { FETCH_USER_REQUEST } from "../UserRedux/UserActionTypes"
import { FETCH_USER_SUCCESS } from "../UserRedux/UserActionTypes"
import { FETCH_USER_FAILURE } from "../UserRedux/UserActionTypes"

const initialState = {
    loading: false,
    userdata: [],
    error: ''
}

const UserReducer = (state = initialState,action) => {
    switch(action.type){
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                userdata: action.payload,
                error:'' 
            }
        case FETCH_USER_FAILURE:
            return {
                loading: false,
                userdata : [],
                error: action.payload
            }
        default: return state
    }
}

export default UserReducer