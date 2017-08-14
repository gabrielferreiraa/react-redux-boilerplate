'use strict'

import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Add from './add'
import Edit from './edit'
import Management from './management'

class Participant extends Component {
  render () {
    return (
      <div>
        <Route exact path='/participantes' component={Management} />
        <Route path='/participantes/novo' component={Add} />
        <Route path='/participantes/editar/:id' component={Edit} />
      </div>
    )
  }
}

export default Participant
