'use strict'

import { handleActions } from 'redux-actions'
import * as action  from './actions'

const initialState = { menus: [], activeMenu: {} }

const handlers = {
  [action.MENU_FETCHED]: (state, action) => ({ ...state, menus: action.payload, startMenus: action.payload }),
  [action.MENU_SEARCHED]: (state, action) => {
    return {
      ...state,
      menus: state.startMenus.filter(item => item.text.toLowerCase().includes(action.payload.toLowerCase()))}
  },
  [action.MENU_SELECTED]: (state, action) => ({ ...state, activeMenu: action.payload })
}

export default handleActions(handlers, initialState)
