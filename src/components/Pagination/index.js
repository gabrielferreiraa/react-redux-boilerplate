'use strict'

import React from 'react'
import pagination from 'utils/Pagination'
import Page from 'components/Pagination/Page'

const Pagination = ({ total, activePage, pageLink }) => (
  <ul>
    {pagination({ total, activePage }).map((page, index) => (
      <li key={index}>
        <Page page={page} pageLink={pageLink.replace('%pageNumber%', page)} />
      </li>
    ))}
  </ul>
)

export default Pagination
