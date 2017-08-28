'use strict'

import React from 'react'
import Pagination from './index'
import PaginationWithText from './text'
import { storiesOf } from '@kadira/storybook'

storiesOf('<Pagination />', module)
  .add('with props', () => (
    <Pagination total={182} activePage={48} pageLink='https://mypage.com.br/%pageNumber%' />
  ))
  .add('without props', () => (
    <Pagination pageLink='https://mypage.com.br/%pageNumber%' />
  ))
  .add('with text', () => (
    <PaginationWithText registersTotal={8382} total={182} activePage={48}
      pageLink='https://mypage.com.br/%pageNumber%' />
  ))
