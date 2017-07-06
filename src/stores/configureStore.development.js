import { applyMiddleware, createStore } from 'redux'
import { DEV_TOOLS } from 'constants/configConstants'
import globalReducers from 'reducers/GlobalReducers'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

export function configureStore () {
  return applyMiddleware(thunk, multi, promise)(createStore)(globalReducers, DEV_TOOLS)
}
