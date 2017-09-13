'use strict'

import React from 'react'
import { Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { edit, add } from 'reducers/participants/action-creators'
import Form from './form'
import Management from './management'
import Loader from 'components/loader'

import style from './css/management'

const Participant = props => (
  <div>
    {props.isFetching && <Loader className={style.loader} />}
    <Route exact path='/participantes' component={Management} />
    <Route path='/participantes/novo' render={() => <Form onSubmit={props.add} {...props} />} />
    <Route path='/participantes/editar/:id' render={() => <Form onSubmit={props.edit} {...props} />} />
  </div>
)

const mapStateToProps = state => ({ isFetching: state.participants.isFetching })
const mapDispatchToProps = dispatch => bindActionCreators({ edit, add }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Participant)
