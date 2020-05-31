import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./UserActionTypes"
import axios from 'axios'
export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}


export const fetchUserSuccess = userdata => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: userdata
    }
}

export const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}


export const fetchUser = token => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('http://localhost:8000/auth/users/me',{ 
          headers: {
           Authorization: 'Token '+ token } 
      })
      .then(res => {
          const user = res.data
          dispatch(fetchUserSuccess(user))
      })
      .catch(error => {
          const errMsg = error.message
          dispatch(fetchUserFailure(errMsg))
      })

    }
}