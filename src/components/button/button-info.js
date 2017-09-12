'use strict'

import React from 'react'
import Button from './index'

const ButtonInfo = ({ children, onClick, className = '', ...props }) => (
  <Button className={`btn-info ${className}`} onClick={onClick} {...props}>
    {children}
  </Button>
)

export { ButtonInfo }
