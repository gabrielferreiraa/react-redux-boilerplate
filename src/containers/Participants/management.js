'use strict'

import React, { Component } from 'react'
import HeaderFilters from 'components/HeaderFilters'
import style from './css/Management'
import TableGenerator from 'components/TableGenerator'
import { Link } from 'react-router-dom'
import { fetch } from 'actions/ParticipantActions'
import PaginationWithText from 'components/Pagination/Text'
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
    }
  }

  componentDidMount () {
    this.props.fetch()
  }

  render () {
    return (
      <div>
        <HeaderFilters />
        <div className='animated fadeIn'>
          <div className={`${style.cardDataTable} card`}>
            <input type='text' className={`form-control ${style.searchInput}`} placeholder='Busca' />
            <TableGenerator
              indicators={this.state.headers}
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
