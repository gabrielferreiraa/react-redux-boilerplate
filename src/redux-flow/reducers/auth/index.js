'use strict'

import { handleActions } from 'redux-actions'
import * as action from './actions'

export const initialState = { isFetching: false, isAuthenticated: false, token: '' }

const handlers = {
  [action.LOGIN_REQUEST]: (state, action) => ({
    ...state,
    isFetching: true,
    isAuthenticated: false,
    user: action.data
  }),
  [action.LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    isFetching: false,
    isAuthenticated: true,
    errorMessage: ''
  }),
  [action.LOGIN_ERROR]: (state, action) => ({
    ...state,
    isFetching: false,
    isAuthenticated: false,
    errorMessage: action.message
  }),
  [action.LOGOUT_REQUEST]: (state, action) => ({
    ...state,
    isFetching: true,
    isAuthenticated: true
  }),
  [action.LOGOUT_SUCCESS]: (state, action) => ({
    ...state,
    isFetching: false,
    isAuthenticated: false
  })
}

export default handleActions(handlers, initialState)
