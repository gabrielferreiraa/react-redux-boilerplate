'use strict'

import React from 'react'
import Button from './index'

const ButtonDanger = ({ children, onClick, className = '', ...props }) => (
  <Button className={`btn-danger ${className}`} onClick={onClick} {...props}>
    {children}
  </Button>
)

export { ButtonDanger }
