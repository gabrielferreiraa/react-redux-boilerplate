import { applyMiddleware, createStore } from 'redux'
import globalReducers from 'reducers/GlobalReducers'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import promise from 'redux-promise'

export function configureStore () {
  return applyMiddleware(thunk, multi, promise)(createStore)(globalReducers)
}
