'use strict'

import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { edit, add } from 'actions/ParticipantFormActions'
import Form from './form'
import Management from './management'

class Participant extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Route exact path='/participantes' component={Management} />
        <Route path='/participantes/novo' render={() => <Form onSubmit={this.props.add} {...this.props} />} />
        <Route path='/participantes/editar/:id' render={() => <Form onSubmit={this.props.edit} {...this.props} />} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ edit, add }, dispatch)
export default connect(null, mapDispatchToProps)(Participant)
