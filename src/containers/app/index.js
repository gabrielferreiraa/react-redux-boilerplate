'use strict'

import React, { Component } from 'react'
import Aside from 'components/aside'
import Header from 'components/header'
import Sidebar from 'components/sidebar'
import Footer from 'components/footer'
import Breadcrumb from 'components/breadcrumb'
import Messages from 'components/redux-toastr'
import LoaderFullPage from 'components/loader-full-page'

import globals from 'src/globals'
import '!style-loader!css-loader!src/dist/core/style.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  componentDidMount () {
    setTimeout(() => this.setState({ isLoading: false }), 1500)
  }

  render () {
    const { isLoading } = this.state

    if (isLoading) return <LoaderFullPage messageLoading={globals.nameProject} />

    return (
      <div>
        <div className='app'>
          <Header />
          <div className='app-body'>
            <Sidebar {...this.props} />
            <main className='main'>
              <Breadcrumb />
              { this.props.children }
            </main>
            <Aside />
          </div>
          <Footer />
          <Messages />
        </div>
      </div>
    )
  }
}


export default App
