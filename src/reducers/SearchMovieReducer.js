'use strict'

import { handleActions } from 'redux-actions'
import * as types from 'constants/SearchMovieConstants'

const INITIAL_STATE = { name: '', list: [], currentMovie: [], open: false }

const handlers = {
  [types.NAME_CHANGED]: (state, action) => ({ ...state, name: action.payload, open: false }),
  [types.MOVIE_SEARCHED]: (state, action) => ({ ...state, list: action.payload.data, open: false }),
  [types.MOVIE_DETAIL]: (state, action) => ({ ...state, currentMovie: action.payload.data, open: true }),
  [types.CLOSED_ASIDE]: (state, action) => ({ ...state, open: action.payload })
}

export default handleActions(handlers, INITIAL_STATE)
