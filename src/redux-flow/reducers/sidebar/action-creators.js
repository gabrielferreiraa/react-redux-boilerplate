'use strict'

import * as action from 'constants/SidebarConstants'
import data from 'src/data'

export const menusFetched = () => ({ type: action.MENU_FETCHED, payload: data.menus })
export const menuSearched = e => ({ type: action.MENU_SEARCHED, payload: e.target.value })
export const menuSelected = menu => ({ type: action.MENU_SELECTED, payload: menu })
