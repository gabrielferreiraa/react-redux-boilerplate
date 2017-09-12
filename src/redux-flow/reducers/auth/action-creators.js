'use strict'

import * as action from './actions'
import { request } from 'utils/ws-client'
import { URL_LOGIN } from 'src/constants'
import { error as alertError } from 'components/messages'

const requestLogin = data => ({
  type: action.REQUEST,
  isFetching: true,
  isAuthenticated: false,
  data
})

const receiveLogin = user => ({
  type: action.SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  token: user.token
})

const errorLogin = message => ({
  type: action.ERROR,
  isFetching: false,
  isAuthenticated: false,
  message
})

export const login = data => {

  let config = {
    method: 'POST',
    url: URL_LOGIN,
    data
  }

  return dispatch => {
    dispatch(requestLogin(data))

    return request(config)
      .then(resp => {
        dispatch(receiveLogin(resp))
        return console.log(resp)
      })
      .catch(err => {
        dispatch(receiveLogin(err))
        return console.log(err)
      })
  }
}
