'use strict'

import React, { Component } from 'react'
import Particles from 'components/particles'
import Loader from 'components/loader'
import global from 'src/globals'

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

    this._handleChange = this._handleChange.bind(this)
  }

  componentDidMount () {
    document.body.classList.add(style.backgroundCity)
  }

  componentDidUnmount () {
    document.body.classList.remove(style.backgroundCity)
  }

  _handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    const { isFetching } = this.props

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
                        <input type='text' className='form-control' name='email' placeholder='Usuário' onChange={this._handleChange} />
                      </div>
                      <div className='input-group mb-4'>
                        <span className='input-group-addon'><i className='icon-lock' /></span>
                        <input type='password' className='form-control' name='password' placeholder='Senha' onChange={this._handleChange} />
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
                <div className={style.fetching}>
                  {isFetching && <Loader type='balls' color={global.style.defaultColor} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ isFetching: state.auth.isFetching })
const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Login)
