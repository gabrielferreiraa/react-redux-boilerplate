'use strict'

import { expect } from 'chai'
import reducer, { initialState } from './index'
import * as action from './actions'

describe('participants reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.be.deep.equal(initialState)
  })

  it('should handle FETCHING', () => {
    expect(reducer([], { type: action.FETCHING })).to.be.deep.equal({ isFetching: true })
  })

  it('should handle SUCCESS', () => {
    expect(reducer([], { type: action.SUCCESS, payload: {} })).to.be.deep.equal({ list: {}, isFetching: false })
  })

  it('should handle ERROR', () => {
    expect(reducer([], { type: action.ERROR })).to.be.deep.equal({ isFetching: false })
  })
})