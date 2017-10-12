'use strict'

import React from 'react'
import InputWarn from 'components/input-warn'
import { warning as alertWarn } from 'components/messages'

const defaultClass = 'form-control form-control-sm'

const Input = props => {
  const { className, label, type, warning } = props
  const { touched, error } = props.meta

  let classNameAttr = className
  let hasErrors = false

  if (touched && error) {
    hasErrors = true
    alertWarn(error.replace(':name:', label))
    classNameAttr = `${defaultClass} form-control-danger`
  }

  return (
    <div className={hasErrors ? 'has-danger has-feedback' : ''}>
      {label && <label>
        {label}
        {warning && <InputWarn warn={warning} />}
      </label>}
      <div>
        <input
          type={type}
          className={classNameAttr}
          {...props.input}
        />
      </div>
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
  className: defaultClass
}

export default Input
