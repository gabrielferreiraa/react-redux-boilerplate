'use strict'

import { handleActions } from 'redux-actions'
import { MENU_FETCHED } from 'constants/SidebarConstants'

const INITIAL_STATE = { menus: [] }

const handlers = {
  [MENU_FETCHED]: (state, action) => ({ ...state, menus: action.payload })
}

export default handleActions(handlers, INITIAL_STATE)
