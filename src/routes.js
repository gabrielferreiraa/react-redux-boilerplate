import React from 'react'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'

import App from 'containers/App'
import Participants from 'containers/Participants'
import ParticipantForm from 'containers/Participants/form'
import Dashboard from 'containers/Dashboard'
import Login from 'containers/Login'
import Error404 from 'containers/Errors/404'

export default props => (
  <Router history={browserHistory}>
    <Route path='login' component={Login} />
    <Route path='/' component={App}>
      <IndexRoute component={Dashboard} />
      <Route path='404' component={Error404} />
      <Route path='dashboard' component={Dashboard} />
      <Route path='participantes' component={Participants} />
      <Route path='participantes/editar/:id' component={ParticipantForm} />
      <Route path='participantes/novo' component={ParticipantForm} />
    </Route>
    <Redirect from='*' to='/404' />
  </Router>
)
