'use strict'

import * as action from './actions'

export const online = () => ({
  type: action.ONLINE,
  payload: true
})

export const offline = () => ({
  type: action.OFFLINE,
  payload: false
})
