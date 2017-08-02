'use strict'

import React from 'react'
import Form from 'containers/Participants/form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { edit } from 'actions/ParticipantFormActions'

const Edit = () => <Form onSubmit={this.props.edit} />

const mapDispatchToProps = dispatch => bindActionCreators({ edit }, dispatch)
export default connect(null, mapDispatchToProps)(Edit)
