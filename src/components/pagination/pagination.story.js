'use strict'

import React from 'react'
import Pagination from './index'
import { storiesOf } from '@kadira/storybook'

const stories = storiesOf('<Pagination />', module)

stories.add('without props', () => (
  <Pagination total={182} activePage={48} pageLink='https://mypage.com.br/%pageNumber%' />
))
