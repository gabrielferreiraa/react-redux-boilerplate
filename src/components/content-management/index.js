'use strict'

import React from 'react'
import Icon from 'components/icon'
import TableGenerator from 'components/table-generator'
import SearchInput from 'components/search-input'
import PaginationWithText from 'components/pagination/text'

import style from './css/management'

const Content = ({ children }) => (
  <div className='animated fadeIn'>
    <div className={`${style.cardDataTable} card`}>
      {children}
    </div>
  </div>
)

const TableGeneratorResult = ({ table }) => (
  <TableGenerator
    indicators={table.headers}
    data={table.response()}
    router={table.router}
    edit={table.edit}
    del={table.del}
  />
)

const Pagination = () => (
  <PaginationWithText
    registersTotal={13122}
    total={50}
    activePage={20}
  />
)

const Refresh = () => (
  <div className={`btn-group ${style.dataActions}`} role='group'>
    <button className='btn btn-outline-success btn-sm'>
      <Icon className='fa fa-refresh' />
    </button>
  </div>
)

const ContentManagement = ({ ...params }) => (
  <Content>
    {params.searchInput && <SearchInput />}
    {params.refresh && <Refresh />}
    {params.table && <TableGeneratorResult table={params.table} />}
    {params.pagination && <Pagination />}
  </Content>
)

export default ContentManagement
