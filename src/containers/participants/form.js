'use strict'

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { reduxForm, Field } from 'redux-form'

const required = value => (value ? undefined : 'Required')

const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined

const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined

const minValue18 = minValue(18)

const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined

const renderField = ({
  input,
  label,
  type,
  className,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className={className} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const Form = ({ handleSubmit }) => {
  return (
    <Container>
      <form role='form' onSubmit={handleSubmit}>
        <Row>
          <Col md='8' xs='6' sm='12'>
            <Field component={renderField} type='number' label='Idade' name='age' className='form-control-sm form-control' validate={[required, number, minValue18]} warn={tooOld} />
          </Col>
          <Col md='4' xs='6' sm='12'>
            <Field component={renderField} label='E-mail' name='email' className='form-control-sm' />
          </Col>
        </Row>
        <button type='submit'>Enviar</button>
      </form>
    </Container>
  )
}

const ParticipantForm = props => {
  const { handleSubmit } = props
  const params = props.match.params || ''

  return <Form handleSubmit={handleSubmit} />
}

export default reduxForm({ form: 'participantForm' })(ParticipantForm)
