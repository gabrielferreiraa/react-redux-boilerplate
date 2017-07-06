'use strict'

import React from 'react'
import Aside from 'components/Aside/Aside'
import Header from 'components/Header/Header'
import Sidebar from 'components/Sidebar/Sidebar'
import Breadcrumb from 'components/Breadcrumb/Breadcrumb'
import Footer from 'components/Footer/Footer'

const App = (props) => (
  <div>
    <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...props}/>
          <Aside />
        </div>
        <Footer />
      </div>
  </div>
)

export default App
