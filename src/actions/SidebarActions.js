'use strict'

import * as types from 'constants/SidebarConstants'
import data from 'src/data'

export const menusFetched = () => {
  return {
    type: types.MENU_FETCHED,
    payload: data.menus
  }
}

export const menuSearched = e => {
  return {
    type: types.MENU_SEARCHED,
    payload: e.target.value
  }
}

export const menuSelected = menu => {
  return {
    type: types.MENU_SELECTED,
    payload: menu
  }
}
