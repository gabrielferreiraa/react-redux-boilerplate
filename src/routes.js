'use strict'

import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import App from 'containers/app'
import Participants from 'containers/participants'
import Dashboard from 'containers/dashboard'
import Login from 'containers/login'

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
