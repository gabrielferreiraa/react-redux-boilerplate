'use strict'

import { combineReducers } from 'redux'
import SearchMovieReducer from 'reducers/SearchMovieReducer'

const globalReducers = combineReducers({
  app: SearchMovieReducer
})

export default globalReducers
