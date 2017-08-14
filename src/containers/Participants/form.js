'use strict'

import React from 'react'
import { reduxForm, Field } from 'redux-form'

const Form = ({ handleSubmit }) => {
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

const ParticipantForm = props => {
  const { handleSubmit } = props
  const params = props.match.params || ''

  return <Form handleSubmit={handleSubmit} />
}

export default reduxForm({ form: 'participantForm' })(ParticipantForm)
