'use strict'

import React from 'react'
import Aside from 'components/Aside'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import Footer from 'components/Footer'
import Messages from 'components/ReduxToastr'

const App = props => (
  <div>
    <div className='app'>
      <Header />
      <div className='app-body'>
        <Sidebar {...props} />
        <main className='main'>
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
