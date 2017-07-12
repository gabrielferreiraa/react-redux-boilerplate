import React, { Component } from 'react'
import { Link } from 'react-router'

const Page404 = () => (
    <div className='app flex-row align-items-center'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <div className='clearfix'>
                <h1 className='float-left display-3 mr-4'>404</h1>
                <h4 className='pt-3'>Oops! You're lost.</h4>
                <p className='text-muted'>A página que você procura não foi encontrada</p>
              </div>
            </div>
          </div>
          <div className='row'>
              <div className='col-md-12 text-center'>
                  <Link to='/dashboard' className='btn btn-warning'>
                    Me tire daqui
                  </Link>
              </div>
          </div>
        </div>
      </div>
)

export default Page404
