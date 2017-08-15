'use strict'

import React from 'react'
import pagination from 'utils/Pagination'
import Page from 'components/Pagination/Page'

const Pagination = ({ total, activePage, pageLink }) => (
  <nav aria-label='Page navigation example'>
    <ul className='pagination'>
      {pagination({ total, activePage }).map((page, index) => (
        <li className='page-item' key={index}>
          <Page page={page} pageLink={pageLink.replace('%pageNumber%', page)} />
        </li>
      ))}
    </ul>
  </nav>
)

export default Pagination
