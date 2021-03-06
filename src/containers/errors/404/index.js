'use strict'

import React from 'react'
import { NavLink } from 'react-router-dom'

const Page404 = () => (
  <div className='app flex-row align-items-center'>
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='clearfix'>
            <h1 className='float-left display-3 mr-4'>404</h1>
            <h4 className='pt-3'>Oops! Você está perdido.</h4>
            <p className='text-muted'>A página que você procura não foi encontrada</p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12 text-center'>
          <NavLink to='/dashboard' className='btn btn-warning'>
            Me tire daqui
          </NavLink>
        </div>
      </div>
    </div>
  </div>
)

export default Page404
