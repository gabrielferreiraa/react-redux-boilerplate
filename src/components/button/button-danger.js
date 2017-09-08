'use strict'

import React from 'react'
import Button from './index'

const ButtonDanger = ({ children, onClick, className = '' }) => (
  <Button className={`btn-danger ${className}`} onClick={onClick}>
    {children}
  </Button>
)

export { ButtonDanger }
