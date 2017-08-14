'use strict'

import React from 'react'
import Form from 'containers/Participants/form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { edit } from 'actions/ParticipantFormActions'

const Edit = props => <Form onSubmit={props.edit} />

const mapDispatchToProps = dispatch => bindActionCreators({ edit }, dispatch)

export default connect(null, mapDispatchToProps)(Edit)
