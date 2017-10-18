'use strict'

import React from 'react'
import { Row, Col } from 'reactstrap'
import { ButtonSuccess, ButtonWarning } from 'components/button'
import Icon from 'components/icon'

const FormFooter = props => {
  const { valid, history } = props

  return (
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
          onClick={() => history.push('/participantes')}
          >
          <Icon className='fa fa-arrow-circle-o-left' />{' '}
            Voltar
          </ButtonWarning>
      </Col>
    </Row>
  )
}

export default FormFooter
