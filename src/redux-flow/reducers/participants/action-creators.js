'use strict'

import * as action from './actions'
import { URL_API } from 'src/constants'
import axios from 'axios'

export const edit = values => ({ type: action.EDIT, payload: '' })
export const add = values => ({ type: action.ADD, payload: '' })
export const fetch = () => (dispatch, getState) => {
  if (!getState().participants.isFetching) {
    dispatch({ type: action.FETCHING })

    axios.get(URL_API)
      .then(resp => dispatch({
        type: action.SUCCESS,
        payload: resp.data
      }))
      .catch(err => {
        dispatch({ type: action.ERROR })
        console.log(err)
      })
  }
}
