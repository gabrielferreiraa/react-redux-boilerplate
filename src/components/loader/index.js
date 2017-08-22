'use strict'

import React, { Component } from 'react'
import Loading from 'react-loading'
import style from './css/loader'

class Loader extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    document.body.classList.add(style.block)
  }

  componentWillUnmount () {
    document.body.classList.remove(style.block)
  }

  render () {
    return (
      <div className={style.loader}>
        <Loading type='bars' color='#263238' delay='100' height='44' width='44'/>
      </div>
    )
  }
}

export default Loader