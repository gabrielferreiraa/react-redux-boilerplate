'use strict'

import * as action from './actions'
import data from 'src/data'

export const fetch = () => ({ type: action.FETCH, payload: data.menus })
export const search = e => ({ type: action.SEARCH, payload: e.target.value })
export const select = menu => ({ type: action.SELECT, payload: menu })
export const toggle = () => {
  document.body.classList.toggle('sidebar-hidden')
  return { type: action.TOGGLE }
}