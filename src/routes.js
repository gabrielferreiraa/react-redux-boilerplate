'use strict'

import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import App from 'containers/App'
import Participants from 'containers/Participants'
import Dashboard from 'containers/Dashboard'
import Login from 'containers/Login'

export default props => (
  <Router>
    <Switch>
      <Route path='/login' name='Login' component={Login} />
      <App>
        <Route exact path='/' component={Dashboard} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/participantes' component={Participants} />
        <Redirect from='/' to='/dashboard' />
      </App>
    </Switch>
  </Router>
)
