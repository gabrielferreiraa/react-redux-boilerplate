'use strict'

import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import SidebarReducer from 'reducers/SidebarReducer'

const globalReducers = combineReducers({
  sidebar: SidebarReducer,
  form: formReducer
})

export default globalReducers
