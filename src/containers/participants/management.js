'use strict'

import React, { Component } from 'react'
import HeaderManagement from 'components/header-management'
import Filters from 'components/filters'
import ContentManagement from 'components/content-management'
import Icon from 'components/icon'
import CreateButton from 'components/create-button'
import style from './css/management'
import { ButtonInfo } from 'components/button'

import { fetch } from 'reducers/participants/action-creators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Management extends Component {
  constructor (props) {
    super(props)

    this.state = {
      filterOpen: false,
      route: 'participantes',
      headers: [
        { id: '#' },
        { login: 'Login' },
        { html_url: 'URL' }
      ],
      filters: [
        {
          component: 'input',
          placeholder: 'Pesquise por Nome ou CPF',
          label: 'Nome ou CPF'
        }, {
          component: 'select',
          placeholder: 'Selecione o estabelecimento',
          label: 'Estabelecimento',
          data: { 321: 'Gabriel', 21: 'Fernando' }
        }
      ]
    }
  }

  componentDidMount () {
    this.props.fetch()
    document.addEventListener('scroll', () => this.state.filterOpen && this.setState({ filterOpen: false }))
  }

  render () {
    const { headers } = this.state
    const { participants } = this.props

    const responseData = () => (
      participants.map(v => ({
        id: v.id,
        login: v.login,
        html_url: v.html_url
      }))
    )

    const table = {
      headers: headers,
      response: responseData,
      router: this.state.route,
      edit: true,
      del: true
    }

    const filters = {
      content: this.state.filters,
      open: this.state.filterOpen
    }

    const refresh = {
      fetch: this.props.fetch
    }

    const BtnFilter = () => (
      <ButtonInfo
        onClick={() => this.setState({ filterOpen: !this.state.filterOpen })}
        className={`${style.btnFilterToggle} ${filters.open ? style.open : style.close}`}>
        <Icon className={!filters.open ? `fa fa-filter` : `fa fa-times`} />
      </ButtonInfo>
    )

    return (
      <div>
        <HeaderManagement />
        <BtnFilter />
        <Filters
          filters={filters}
        />
        <CreateButton
          route={this.state.route}
        />
        <ContentManagement
          table={table}
          refresh={refresh}
          searchInput
          pagination
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({ participants: state.participants.list })
const mapDispatchToProps = dispatch => bindActionCreators({ fetch }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Management)
