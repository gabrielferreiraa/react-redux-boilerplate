'use strict'

import React from 'react'
import { Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { edit, add } from 'actions/ParticipantFormActions'
import Form from './form'
import Management from './management'

const Participant = props => (
  <div>
    <Route exact path='/participantes' component={Management} />
    <Route path='/participantes/novo' render={() => <Form onSubmit={props.add} {...props} />} />
    <Route path='/participantes/editar/:id' render={() => <Form onSubmit={props.edit} {...props} />} />
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({ edit, add }, dispatch)
export default connect(null, mapDispatchToProps)(Participant)
