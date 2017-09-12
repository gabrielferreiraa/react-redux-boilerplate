'use strict'

import { handleActions } from 'redux-actions'
import * as action from './actions'

export const initialState = { isFetching: false, isAuthenticated: false, token: '' }

const handlers = {
  [action.REQUEST]: (state, action) => ({
    ...state,
    isFetching: true,
    isAuthenticated: false,
    user: action.data
  }),
  [action.SUCCESS]: (state, action) => ({
    ...state,
    isFetching: false,
    isAuthenticated: true,
    errorMessage: ''
  }),
  [action.ERROR]: (state, action) => ({
    ...state,
    isFetching: false,
    isAuthenticated: false,
    errorMessage: action.message
  })
}

export default handleActions(handlers, initialState)
