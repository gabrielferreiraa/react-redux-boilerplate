'use strict'

import React from 'react'
import { string, func } from 'prop-types'

const Button = ({ children, className, onClick, ...props }) => (
  <button type={props.type} className={`btn ${className}`} onClick={onClick} {...props}>
    {children}
  </button>
)

Button.propTypes = {
  className: string,
  onClick: func
}

Button.defaultProps = {
  className: 'btn-success',
  type: 'button'
}

export { ButtonInfo } from './button-info'
export { ButtonSuccess } from './button-success'
export { ButtonWarning } from './button-warning'
export { ButtonDanger } from './button-danger'
export default Button
