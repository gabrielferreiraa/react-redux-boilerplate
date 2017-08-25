'use strict'

import React from 'react'
import Footer from './index'
import { storiesOf } from '@kadira/storybook'
import '!style-loader!css-loader!src/dist/core/style.css'

const stories = storiesOf('<Footer />', module)

stories.add('Footer', () => (
  <Footer />
))
