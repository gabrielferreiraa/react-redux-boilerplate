'use strict'

import { handleActions } from 'redux-actions'
import { MENU_FETCHED, MENU_SEARCHED } from 'constants/SidebarConstants'

const INITIAL_STATE = { menus: [] }

const handlers = {
  [MENU_FETCHED]: (state, action) => ({ ...state, menus: action.payload, startMenus: action.payload }),
  [MENU_SEARCHED]: (state, action) => {
    return {
      ...state,
      menus: state.startMenus.filter(item => item.text.toLowerCase().includes(action.payload.toLowerCase()))}
  }
}

export default handleActions(handlers, INITIAL_STATE)
