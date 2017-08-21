'use strict'

import * as action from './actions'
import { URL_API } from 'src/constants'
import axios from 'axios'

export const edit = values => {
  return {
    type: action.EDIT,
    payload: ''
  }
}

export const add = values => {
  return {
    type: action.ADD,
    payload: ''
  }
}

export const fetch = () => {
  return dispatch => {
    axios.get(URL_API)
      .then(resp => dispatch({
        type: action.FETCH,
        payload: resp.data
      }))
      .catch(err => {
        console.log(err)
      })
  }
}
