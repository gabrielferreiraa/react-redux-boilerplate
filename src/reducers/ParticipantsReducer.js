'use strict'

import { handleActions } from 'redux-actions'
import * as type from 'constants/ParticipantConstants'

const INITIAL_STATE = { list: [] }

const handlers = {
  [type.FETCH]: (state, action) => ({ ...state, list: action.payload })
}

export default handleActions(handlers, INITIAL_STATE)
