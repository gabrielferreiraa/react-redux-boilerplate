'use strict'

import React, { Component } from 'react'
import * as Message from 'components/Messages'

class Participant extends Component {
  render () {
    Message.success('Cadastro realizado com sucesso')
    Message.error('Problema ao salvar cadastro')

    return (
      <h1>Index</h1>
    )
  }
}

export default Participant
