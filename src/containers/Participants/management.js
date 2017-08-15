'use strict'

import React, { Component } from 'react'
import HeaderFilters from 'components/HeaderFilters'
import style from './css/Management'
import Pagination from 'components/Pagination'

class Management extends Component {
  render () {
    const renderHeader = headers => (
      <thead>
        <tr>
          {headers.map(header => <th>{header}</th>)}
        </tr>
      </thead>
    )

    const styledStatus = (status = 4) => {
      const listStatus = {
        0: {
          name: 'Pré Cadastro',
          className: 'warning'
        },
        1: {
          name: 'Ativo',
          className: 'success'
        },
        2: {
          name: 'Inativo',
          className: 'default'
        },
        3: {
          name: 'Recusado',
          className: 'danger'
        },
        4: {
          name: 'Sem status',
          className: 'primary'
        }
      }

      return <span className={`badge badge-${listStatus[status].className}`}>{listStatus[status].name}</span>
    }

    const headers = ['Nome', 'Cargo', 'Status', 'Ações']

    return (
      <div>
        <HeaderFilters />
        <div className='animated fadeIn'>
          <div className={`${style.cardDataTable} card`}>
            <input type='text' className={`form-control ${style.searchInput}`} placeholder='Busca' />
            <table className='table table-hover'>
              {renderHeader(headers)}
              <tbody>
                <tr>
                  <td>Júlia Santos Melo</td>
                  <td>Gerente</td>
                  <td>{styledStatus(1)}</td>
                  <td>
                    <div className='btn-group' role='group'>
                      <button type='button' className='btn btn-warning btn-sm'><i className='icon-pencil' /></button>
                      <button type='button' className='btn btn-danger btn-sm'><i className='icon-trash' /></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Felipe Correia Barros</td>
                  <td>Proprietário</td>
                  <td>{styledStatus(2)}</td>
                  <td>
                    <div className='btn-group' role='group'>
                      <button type='button' className='btn btn-warning btn-sm'><i className='icon-pencil' /></button>
                      <button type='button' className='btn btn-danger btn-sm'><i className='icon-trash' /></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Emily Gomes Barros</td>
                  <td>Vendedor</td>
                  <td>{styledStatus(3)}</td>
                  <td>
                    <div className='btn-group' role='group'>
                      <button type='button' className='btn btn-warning btn-sm'><i className='icon-pencil' /></button>
                      <button type='button' className='btn btn-danger btn-sm'><i className='icon-trash' /></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Tiago Rodrigues Melo</td>
                  <td>Gerente</td>
                  <td>{styledStatus(1)}</td>
                  <td>
                    <div className='btn-group' role='group'>
                      <button type='button' className='btn btn-warning btn-sm'><i className='icon-pencil' /></button>
                      <button type='button' className='btn btn-danger btn-sm'><i className='icon-trash' /></button>
                    </div>
                  </td>
                </tr>
              </tbody>
              {renderHeader(headers)}
            </table>
            <Pagination total={50} activePage={23} pageLink='https://mypage.com.br/%pageNumber%' />
          </div>
        </div>
      </div>
    )
  }
}

export default Management
