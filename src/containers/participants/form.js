'use strict'

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { reduxForm, Field } from 'redux-form'
import validators from './validators'
import Input from 'components/input'
import FormFooter from 'components/form-footer'

const Form = ({ handleSubmit, ...props }) => {
  return (
    <Container>
      <form role='form' onSubmit={handleSubmit}>
        <Row>
          <Col md='8' xs='6' sm='12'>
            <Field
              component={Input}
              type='number'
              label='Idade'
              name='age'
              validate={validators.age.errors} />
          </Col>
          <Col md='4' xs='6' sm='12'>
            <Field
              component={Input}
              label='E-mail'
              name='email'
            />
          </Col>
        </Row>
        <FormFooter {...props} />
      </form>
    </Container>
  )
}

const ParticipantForm = props => {
  const { handleSubmit } = props
  const params = props.match.params || ''

  return <Form handleSubmit={handleSubmit} {...props} />
}

export default reduxForm({ form: 'participantForm' })(ParticipantForm)
