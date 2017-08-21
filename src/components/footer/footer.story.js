'use strict'

import React from 'react'
import Footer from './index'
import { storiesOf } from '@kadira/storybook'

const stories = storiesOf('<Footer />', module)

stories.add('Footer', () => (
  <Footer />
))
