'use strict'

import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import sidebarReducer from './sidebar'
import participantsReducer from './participants'
import authReducer from './auth'
import appReducer from './app'

const rootReducers = combineReducers({
  app: appReducer,
  form: formReducer,
  toastr: toastrReducer,
  sidebar: sidebarReducer,
  participants: participantsReducer,
  auth: authReducer
})

export default rootReducers
