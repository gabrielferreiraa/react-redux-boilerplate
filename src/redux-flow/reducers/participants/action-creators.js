'use strict'

import * as action from './actions'
import { request } from 'utils/ws-client'
import { error } from 'components/messages'

export const edit = values => ({ type: action.EDIT, payload: '' })
export const add = values => ({ type: action.ADD, payload: '' })
export const fetch = () => (dispatch, getState) => {
  const hasRequest = getState().participants.isFetching

  if (!hasRequest) {
    dispatch({ type: action.FETCHING })

    request({ method: 'GET' })
      .then(resp => dispatch({ type: action.SUCCESS, payload: resp.data }))
      .catch(() => {
        error('Houve um problema ao buscar informações')
        return dispatch({ type: action.ERROR })
      })
  }
}
