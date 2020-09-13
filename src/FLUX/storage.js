
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'

import {contactsList} from "./contactsList/reducers";

const reducers = combineReducers({
  contactsList
})

let store = createStore( reducers, applyMiddleware( thunkMiddleware ) )

// window.contactsAppState = store.getState()

export default store
