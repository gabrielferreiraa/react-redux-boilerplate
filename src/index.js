'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from 'containers/App'
import { configureStore } from 'stores/configureStore'
import Routers from './routes'

const store = configureStore()

const renderApp = Component => {
  render(
    <Provider store={store}>
      <Routers />
    </Provider>
    , document.querySelector('[data-js="app"]'))
}

renderApp(App)

const isDev = () => process.env.NODE_ENV === 'development'

if (isDev && module.hot) {
  module.hot.accept('containers/App', () => {
    renderApp(require('containers/App').default)
  })
}
