'use strict'

import { expect } from 'chai'
import reducer, { initialState } from './index'
import * as action from './actions'

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.be.deep.equal(initialState)
  })

  it('should handle LOGIN_REQUEST', () => {
    const dispatcher = {
      type: action.LOGIN_REQUEST,
      payload: {
        email: 'admin@admin.com.br',
        password: 'password'
      }
    }

    const response = reducer([], dispatcher)

    expect(response).to.be.deep.equal({
      isFetching: true,
      isAuthenticated: false,
      user: dispatcher
    })
  })
})
