'use strict'

import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import SidebarReducer from 'reducers/SidebarReducer'

const globalReducers = combineReducers({
  sidebar: SidebarReducer,
  form: formReducer,
  toastr: toastrReducer
})

export default globalReducers
