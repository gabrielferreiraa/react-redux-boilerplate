'use strict'

import React from 'react'
import Aside from 'components/aside'
import Header from 'components/header'
import Sidebar from 'components/sidebar'
import Footer from 'components/footer'
import Breadcrumb from 'components/breadcrumb'
import Messages from 'components/redux-toastr'

const App = props => (
  <div>
    <div className='app'>
      <Header />
      <div className='app-body'>
        <Sidebar {...props} />
        <main className='main'>
          <Breadcrumb />
          { props.children }
        </main>
        <Aside />
      </div>
      <Footer />
      <Messages />
    </div>
  </div>
)

export default App
