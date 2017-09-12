'use strict'

import React from 'react'
import Button from './index'

const ButtonWarning = ({ children, onClick, className = '', ...props }) => (
  <Button className={`btn-warning ${className}`} onClick={onClick} {...props}>
    {children}
  </Button>
)

export { ButtonWarning }
