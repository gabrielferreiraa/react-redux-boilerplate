'use strict'

import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import sidebarReducer from './sidebar'
import participantsReducer from './participants'

const rootReducers = combineReducers({
  form: formReducer,
  toastr: toastrReducer,
  sidebar: sidebarReducer,
  participants: participantsReducer
})

export default rootReducers
