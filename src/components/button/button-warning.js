'use strict'

import React from 'react'
import Button from './index'

const ButtonWarning = ({ children, onClick, className = '' }) => (
  <Button className={`btn-warning ${className}`} onClick={onClick}>
    {children}
  </Button>
)

export { ButtonWarning }
