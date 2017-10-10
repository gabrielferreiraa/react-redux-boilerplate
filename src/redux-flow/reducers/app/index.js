'use strict'

import { handleActions } from 'redux-actions'
import * as action from './actions'

export const initialState = { isOnline: '' }

const handlers = {
  [action.ONLINE]: (state, action) => ({
    ...state,
    isOnline: action.payload
  }),
  [action.OFFLINE]: (state, action) => ({
    ...state,
    isOnline: action.payload
  })
}

export default handleActions(handlers, initialState)
