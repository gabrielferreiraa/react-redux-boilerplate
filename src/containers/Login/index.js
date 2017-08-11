'use strict'

import React, { Component } from 'react'
// import { browserHistory } from 'react-router-dom'
import Particles from 'components/Particles'
import style from './css/Login'

class Login extends Component {
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
                        <input type='text' className='form-control' placeholder='Usuário' />
                      </div>
                      <div className='input-group mb-4'>
                        <span className='input-group-addon'><i className='icon-lock' /></span>
                        <input type='password' className='form-control' placeholder='Senha' />
                      </div>
                      <div className='row'>
                        <div className='col-6'>
                          <button type='button' className='btn btn-primary px-4' onClick={() => this.props.history.push('/dashboard')} >Login</button>
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

export default Login
