'use strict'

import React, { Component } from 'react'
import Aside from 'components/aside'
import Header from 'components/header'
import Sidebar from 'components/sidebar'
import Footer from 'components/footer'
import Breadcrumb from 'components/breadcrumb'
import Messages from 'components/redux-toastr'
import LoaderFullPage from 'components/loader-full-page'
import Network from 'react-network'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { online, offline } from 'reducers/app/action-creators'

import globals from 'src/globals'
import 'dist/core/style'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true
    }

    this._handleNetwork = this._handleNetwork.bind(this)
  }

  componentDidMount () {
    setTimeout(() => this.setState({ isLoading: false }), 1500)
  }

  _handleNetwork (online) {
    if (online) {
      return this.props.online()
    }

    return this.props.offline()
  }

  render () {
    const { isLoading } = this.state

    if (isLoading) return <LoaderFullPage messageLoading={globals.nameProject} />

    return (
      <div className='app'>
        <Header />
        <div className='app-body'>
          <Sidebar {...this.props} />
          <main className='main'>
            <Breadcrumb />
            { this.props.children }
            <Network onChange={({ online }) => this._handleNetwork(online)} />
          </main>
          <Aside />
        </div>
        <Footer />
        <Messages />
      </div>
    )
  }
}

// const mapStateToProps = state => ({ isOnline: state.participants.isFetching })
const mapDispatchToProps = dispatch => bindActionCreators({ online, offline }, dispatch)
export default connect(null, mapDispatchToProps)(App)
