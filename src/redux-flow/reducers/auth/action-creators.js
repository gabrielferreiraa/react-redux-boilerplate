'use strict'

import * as action from './actions'
import { request } from 'utils/ws-client'
import { URL_LOGIN } from 'src/constants'
import { setToken, removeToken } from 'utils/auth'

const requestLogin = data => ({
  type: action.LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  data
})

const receiveLogin = user => ({
  type: action.LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  token: user.token
})

const errorLogin = message => ({
  type: action.LOGIN_ERROR,
  isFetching: false,
  isAuthenticated: false,
  message
})

const requestLogout = () => ({
  type: action.LOGOUT_REQUEST,
  isFetching: true,
  isAuthenticated: true
})

const receiveLogout = () => ({
  type: action.LOGOUT_SUCCESS,
  isFetching: false,
  isAuthenticated: false
})

export const login = (data, { ...history }) => {
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
        !!resp.data.data.token && setToken(resp.data.data.token)
        history.push('/dashboard')
      })
      .catch(err => {
        dispatch(errorLogin(err))
        return console.log(err)
      })
  }
}

export const logout = ({ history }) => {
  return dispatch => {
    dispatch(requestLogout())
    removeToken()
    history.push('/login')
    dispatch(receiveLogout())
  }
}
