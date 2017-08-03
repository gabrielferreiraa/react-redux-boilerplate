'use strict'

import React, { Component } from 'react'
import * as toast from 'components/Messages'

class Participant extends Component {
  render () {
    toast.success('Cadastrado realizado com sucesso')
    return (
      <h1>Index</h1>
    )
  }
}

export default Participant
