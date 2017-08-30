'use strict'

import { handleActions } from 'redux-actions'
import * as action from './actions'

export const initialState = { list: [], isFetching: false }

const handlers = {
  [action.FETCHING]: (state, action) => ({ ...state, isFetching: true }),
  [action.SUCCESS]: (state, action) => ({ ...state, list: action.payload, isFetching: false }),
  [action.ERROR]: (state, action) => ({ ...state, isFetching: false })
}

export default handleActions(handlers, initialState)
