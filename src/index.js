'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { configureStore } from 'stores/configureStore'

import App from 'containers/App'
import Main from './main'

const store = configureStore()
const rootElement = document.querySelector('[data-js="app"]')

const renderApp = Component => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Main Component={Component}/>
      </Provider>
    </AppContainer>
    , rootElement)
}

renderApp(App)

const isDev = () => process.env.NODE_ENV === 'development'

if (isDev && module.hot) {
  module.hot.accept('containers/App', () => {
    renderApp(require('containers/App').default)
  })
}
