'use strict'

import * as action from './actions'
import { request } from 'utils/ws-client'
import { URL_LOGIN } from 'src/constants'
import { error as alertError } from 'components/messages'

const requestLogin = creds => ({
  type: action.REQUEST,
  isFetching: true,
  isAuthenticated: false,
  creds
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

export const login = creds => {

  let config = {
    method: 'POST',
    url: URL_LOGIN,
    data: { email: 'teste', password: 'senha' }
  }

  return dispatch => {
    dispatch(requestLogin(creds))

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
