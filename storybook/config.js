'use strict'

import { configure } from '@kadira/storybook'
import 'dist/core/style.css'

const req = require.context('../src/components', true, /\.story\.js$/)

function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
