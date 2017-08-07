import { applyMiddleware, createStore } from 'redux'
import { DEV_TOOLS } from 'constants/configConstants'
import globalReducers from 'reducers/GlobalReducers'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

export function configureStore () {
  const middlewares = [
    thunk, multi, promise
  ]

  return applyMiddleware(...middlewares)(createStore)(globalReducers, DEV_TOOLS)
}
