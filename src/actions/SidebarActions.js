'use strict'

import { MENU_FETCHED } from 'constants/SidebarConstants'
import data from 'src/data'

export const menusFetched = () => {
  return {
    type: MENU_FETCHED,
    payload: data.menus
  }
}
