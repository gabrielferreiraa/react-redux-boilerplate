'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from 'containers/App'
import { configureStore } from 'stores/configureStore'

const store = configureStore()

const renderApp = Component => {
  render(
    <Provider store={store}>
      <Component />
    </Provider>
    , document.querySelector('[data-js="app"]'))
}

renderApp(App)
