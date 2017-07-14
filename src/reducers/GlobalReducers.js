'use strict'

import { combineReducers } from 'redux'
import SideBarReducer from 'reducers/SidebarReducer'

const globalReducers = combineReducers({
  sidebar: SideBarReducer
})

export default globalReducers
