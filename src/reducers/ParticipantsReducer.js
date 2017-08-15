'use strict'

import { handleActions } from 'redux-actions'
import * as type from 'constants/ParticipantConstants'

const INITIAL_STATE = { participants: [] }

const handlers = {
  [type.FETCH]: (state, action) => ({ ...state, participants: action.payload })
}

export default handleActions(handlers, INITIAL_STATE)
