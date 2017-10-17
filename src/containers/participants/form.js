'use strict'

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { reduxForm, Field } from 'redux-form'
import validators from './validators'
import Input from 'components/input'
import { ButtonSuccess, ButtonWarning } from 'components/button'
import Icon from 'components/icon'

const Form = ({ handleSubmit, ...props }) => {
  const { valid } = props

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
        <Row>
          <Col md='12'>
            <ButtonSuccess
              type='submit'
              disabled={!valid}
        >
              <Icon className='fa fa-check-circle-o' />{' '}
        Salvar
        </ButtonSuccess>
            <ButtonWarning
              onClick={() => props.history.push('/participantes')}
        >
              <Icon className='fa fa-arrow-circle-o-left' />{' '}
          Voltar
        </ButtonWarning>
          </Col>
        </Row>
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
