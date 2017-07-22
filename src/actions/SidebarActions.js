'use strict'

import { MENU_FETCHED, MENU_SEARCHED } from 'constants/SidebarConstants'
import data from 'src/data'

export const menusFetched = () => {
  return {
    type: MENU_FETCHED,
    payload: data.menus
  }
}

export const menuSearched = e => {
  return {
    type: MENU_SEARCHED,
    payload: e.target.value
  }
}
