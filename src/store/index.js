import { userReducer } from './userReducer'
import { combineReducers, legacy_createStore as createStore } from 'redux'

const rootReducer = combineReducers({
    user: userReducer,
})

export const store = createStore(rootReducer)
