'use strict'

import React from 'react'
import Button from './index'

const ButtonSuccess = ({ children, onClick, className = '' }) => (
  <Button className={`btn-success ${className}`} onClick={onClick}>
    {children}
  </Button>
)

export { ButtonSuccess }
