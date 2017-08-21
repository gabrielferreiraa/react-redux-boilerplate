'use strict'

import { handleActions } from 'redux-actions'
import * as action from './actions'

const initialState = { list: [] }

const handlers = {
  [action.FETCH]: (state, action) => ({ ...state, list: action.payload })
}

export default handleActions(handlers, initialState)
