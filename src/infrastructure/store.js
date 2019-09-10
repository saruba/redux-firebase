import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from '../app/reducer'

export const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware),
)