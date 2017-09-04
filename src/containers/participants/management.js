'use strict'

import React, { Component } from 'react'
import HeaderManagement from 'components/header-management'
import Filters from 'components/filters'
import style from './css/management'
import Icon from 'components/icon'
import TableGenerator from 'components/table-generator'
import { fetch } from 'reducers/participants/action-creators'
import PaginationWithText from 'components/pagination/text'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Management extends Component {
  constructor (props) {
    super(props)

    this.state = {
      headers: [
        { id: '#' },
        { login: 'Login' },
        { html_url: 'URL' }
      ],
      filters: [
        { component: 'input', placeholder: 'Pesquise por Nome ou CPF', label: 'Nome ou CPF' },
        { component: 'select', placeholder: 'Selecione o estabelecimento', label: 'Estabelecimento', data: { 321: 'Gabriel', 21: 'Fernando' } }
      ]
    }
  }

  componentDidMount () {
    this.props.fetch()
  }

  render () {
    const { filters, headers } = this.state

    return (
      <div>
        <HeaderManagement />
        {filters && <Filters filters={filters} />}
        <div className='animated fadeIn'>
          <div className={`${style.cardDataTable} card`}>
            <div>
              <button className='btn btn-success'>
              <Icon className='fa fa-plus' />
                &nbsp;Cadastrar Participante
              </button>
            </div>
            <input type='text' className={`form-control ${style.searchInput}`} placeholder='&#xf002; Busca' />
            <TableGenerator
              indicators={headers}
              data={this.props.participants}
              router='participantes'
              edit
              del
            />
            <PaginationWithText
              registersTotal={13122}
              total={50}
              activePage={20}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ participants: state.participants.list })
const mapDispatchToProps = dispatch => bindActionCreators({ fetch }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Management)
