'use strict'

import React from 'react'
import { reduxForm, Field } from 'redux-form'

const Form = ({ handleSubmit }) => {
  return (
    <form role='form' onSubmit={handleSubmit}>
      <h1>Form</h1>
    </form>
  )
}

const ParticipantForm = props => {
  const { handleSubmit } = props
  const params = props.match.params || ''

  return <Form handleSubmit={handleSubmit} />
}

export default reduxForm({ form: 'participantForm' })(ParticipantForm)
