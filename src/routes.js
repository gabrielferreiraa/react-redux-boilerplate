'use strict'

import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import App from 'containers/App'
import Participants from 'containers/Participants'
import ParticipantEdit from 'containers/Participants/edit'
import ParticipantAdd from 'containers/Participants/add'
import Dashboard from 'containers/Dashboard'
import Login from 'containers/Login'
import Error404 from 'containers/Errors/404'

export default props => (
  <Router>
    <Switch>
      <Route path='/login' name='Login' component={Login} />
      <App>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/dashboard' component={Dashboard} />
          <Participants>
            <Route path='/participantes/novo' component={ParticipantAdd} />
          </Participants>
          <Route path='/404' component={Error404} />
        </Switch>
      </App>
    </Switch>
  </Router>
)
