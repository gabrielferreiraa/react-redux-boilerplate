'use strict'

import React, { Component } from 'react'
import ContentManagement from 'components/content-management'
import { fetch } from 'reducers/participants/action-creators'

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
  }

  render () {
    const { filters, headers } = this.state
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
      router: 'participantes',
      edit: true,
      del: true
    }

    return (
      <ContentManagement
        filters={filters}
        table={table}
        headerManagement
        searchInput
        pagination
      />
    )
  }
}

const mapStateToProps = state => ({ participants: state.participants.list })
const mapDispatchToProps = dispatch => bindActionCreators({ fetch }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Management)
