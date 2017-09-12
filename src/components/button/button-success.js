'use strict'

import React from 'react'
import Button from './index'

const ButtonSuccess = ({ children, onClick, className = '', ...props }) => (
  <Button className={`btn-success ${className}`} onClick={onClick} {...props}>
    {children}
  </Button>
)

export { ButtonSuccess }
