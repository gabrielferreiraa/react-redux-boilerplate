'use strict'

import { applyMiddleware, createStore } from 'redux'
import { DEV_TOOLS } from 'src/constants'
import globalReducers from 'reducers/root-reducers'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

export function configureStore () {
  const middlewares = [
    thunk,
    multi,
    promise
  ]

  const store = applyMiddleware(...middlewares)(createStore)(globalReducers, DEV_TOOLS)

  if (module.hot) {
    module.hot.accept('reducers/root-reducers', () => {
      store.replaceReducer(require('reducers/root-reducers').default)
    })
  }

  return store
}
