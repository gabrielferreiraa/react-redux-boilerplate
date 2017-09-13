'use strict'

import React, { Component } from 'react'
import Particles from 'components/particles'
import style from './css/login'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login } from 'reducers/auth/action-creators'

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  componentWillMount () {
    document.body.classList.add(style.backgroundCity)
  }

  componentWillUnmount () {
    document.body.classList.remove(style.backgroundCity)
  }

  render () {
    return (
      <div>
        <Particles />
        <div className='app flex-row align-items-center'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-4'>
                <div className={`card-group mb-0 ${style.boxLogin}`}>
                  <div className='card p-4'>
                    <div className='card-block'>
                      <h1>Login</h1>
                      <p className='text-muted'>Faça login com sua conta</p>
                      <div className='input-group mb-3'>
                        <span className='input-group-addon'><i className='icon-user' /></span>
                        <input type='text' className='form-control' placeholder='Usuário' onChange={e => this.setState({ email: e.target.value })} />
                      </div>
                      <div className='input-group mb-4'>
                        <span className='input-group-addon'><i className='icon-lock' /></span>
                        <input type='password' className='form-control' placeholder='Senha' onChange={e => this.setState({ password: e.target.value })} />
                      </div>
                      <div className='row'>
                        <div className='col-6'>
                          <button type='button' className='btn btn-primary px-4' onClick={() => this.props.login(this.state, this.props.history)} >Login</button>
                        </div>
                        <div className='col-6 text-right'>
                          <button type='button' className='btn btn-link px-0'>Esqueceu a senha ?</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

//const mapStateToProps = state => ({ isFetching: state.participants.isFetching })
const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch)
export default connect(null, mapDispatchToProps)(Login)

