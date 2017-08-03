'use strict'

import React from 'react'
import Form from 'containers/Participants/form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { add } from 'actions/ParticipantFormActions'

const Add = props => <Form onSubmit={props.add} />

const mapDispatchToProps = dispatch => bindActionCreators({ add }, dispatch)

export default connect(null, mapDispatchToProps)(Add)
