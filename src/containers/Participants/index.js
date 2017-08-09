'use strict'

import React, { Component } from 'react'
import HeaderFilters from 'components/HeaderFilters'
import style from './css/teste'

class Participant extends Component {
  render () {
    return (
      <div>
        <HeaderFilters />
        <div className='animated fadeIn'>
          <div className={`${style.cardDataTable} card`}>
            <input type='text' className={`form-control ${style.searchInput}`} placeholder='Busca' />
            <table className='table table-bordered table-striped table-condensed'>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Cargo</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gabriel Ferreira</td>
                  <td>Gerente</td>
                  <td>Ativo</td>
                </tr>
                <tr>
                  <td>Gabriel Ferreira</td>
                  <td>Gerente</td>
                  <td>Ativo</td>
                </tr>
                <tr>
                  <td>Gabriel Ferreira</td>
                  <td>Gerente</td>
                  <td>Ativo</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Cargo</th>
                  <th>Status</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Participant
