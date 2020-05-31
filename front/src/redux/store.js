import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import UserReducer from './UserRedux/UserReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(UserReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store