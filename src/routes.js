import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import App from 'containers/App'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={Dashboard} />
    <Route path='/dashboard' component={Dashboard} />
    <Redirect from='*' to='/' />
  </Router>
)