'use strict'

import { EDIT, ADD } from 'constants/ParticipantFormConstants'

export const edit = values => {
  return {
    type: EDIT,
    payload: ''
  }
}

export const add = values => {
  return {
    type: ADD,
    payload: ''
  }
}
