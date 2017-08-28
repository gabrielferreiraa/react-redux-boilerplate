'use strict'

import React from 'react'
import Footer from './index'
import { storiesOf } from '@kadira/storybook'

storiesOf('<Footer />', module)
  .add('default', () => (
    <Footer />
  ))
