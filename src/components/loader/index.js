'use strict'

import React, { Component } from 'react'
import Loading from 'react-loading'
import style from './css/loader'
import { string } from 'prop-types'

class Loader extends Component {
  componentWillMount () {
    document.body.classList.add(style.block)
  }

  componentWillUnmount () {
    document.body.classList.remove(style.block)
  }

  render () {
    const { type, className, color } = this.props

    return (
      <div className={className}>
        <Loading type={type} color={color} delay={0} height='44' width='44' />
      </div>
    )
  }
}

Loader.propTypes = {
  type: string,
  className: string,
  color: string
}

Loader.defaultProps = {
  type: 'bars',
  color: '#37474f'
}

export default Loader
