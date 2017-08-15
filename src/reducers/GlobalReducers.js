'use strict'

import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import SidebarReducer from 'reducers/SidebarReducer'
import ParticipantsReducer from 'reducers/ParticipantsReducer'

const globalReducers = combineReducers({
  sidebar: SidebarReducer,
  form: formReducer,
  toastr: toastrReducer,
  participants: ParticipantsReducer
})

export default globalReducers
