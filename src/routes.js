import React from 'react'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'

import App from 'containers/App'
import Participants from 'containers/Participants'
import Dashboard from 'containers/Dashboard'
import Login from 'containers/Login'

export default props => (
  <Router history={browserHistory}>
    <Route path='login' component={Login} />
    <Route path='/' component={App}>
      <IndexRoute component={Dashboard} />
      <Route path='dashboard' component={Dashboard} />
      <Route path='participants' component={Participants} />
    </Route>
    <Redirect from='*' to='/' />
  </Router>
)
