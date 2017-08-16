'use strict'

import * as type from 'constants/ParticipantConstants'
import axios from 'axios'

export const edit = values => {
  return {
    type: type.EDIT,
    payload: ''
  }
}

export const add = values => {
  return {
    type: type.ADD,
    payload: ''
  }
}

export const fetch = () => {
  return dispatch => {
    axios.get('https://api.github.com/users')
      .then(resp => dispatch({
        type: type.FETCH,
        payload: resp.data
      }))
      .catch(err => {
        console.log(err)
      })
  }
}
