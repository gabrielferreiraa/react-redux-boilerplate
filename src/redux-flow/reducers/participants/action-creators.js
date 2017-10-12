'use strict'

import * as action from './actions'
import { request } from 'utils/ws-client'
import { error as alertError } from 'components/messages'

const fetching = () => ({ type: action.FETCHING })
const error = () => ({ type: action.ERROR })

export const edit = values => ({ type: action.EDIT, payload: values })
export const add = values => ({ type: action.ADD, payload: values })
export const fetch = () => (dispatch, getState) => {
  const hasRequest = getState().participants.isFetching

  if (!hasRequest) {
    dispatch(fetching())

    request({ method: 'GET' })
      .then(resp => dispatch({ type: action.SUCCESS, payload: resp.data }))
      .catch(() => {
        alertError('Houve um problema ao buscar informações')
        return dispatch(error())
      })
  }
}
