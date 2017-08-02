'use strict'

import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { edit } from 'actions/ParticipantFormActions'

class ParticipantForm extends Component {
  render () {
    const handleSubmit = this.props.edit

    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field name='name' component='input' />
          <Field name='month' component='input' />
          <Field name='year' component='input' />
        </div>
        <div className='box-footer'>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ edit }, dispatch)

ParticipantForm = connect(null, mapDispatchToProps)(ParticipantForm)
export default reduxForm({ form: 'participantForm' })(ParticipantForm)
