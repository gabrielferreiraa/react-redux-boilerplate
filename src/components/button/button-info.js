'use strict'

import React from 'react'
import Button from './index'

const ButtonInfo = ({ children, onClick, className = '' }) => (
  <Button className={`btn-info ${className}`} onClick={onClick}>
    {children}
  </Button>
)

export { ButtonInfo }
