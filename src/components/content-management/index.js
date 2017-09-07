'use strict'

import React from 'react'
import HeaderManagement from 'components/header-management'
import Icon from 'components/icon'
import TableGenerator from 'components/table-generator'
import Filters from 'components/filters'
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

const ContentManagement = ({ ...params }) => (
  <div>
    {params.headerManagement && <HeaderManagement />}
    <div>
      <button className={`btn btn-success ${style.addBtn}`}>
        <Icon className='fa fa-plus-circle' />
        &nbsp;Criar
      </button>
    </div>
    {params.filters && <Filters filters={params.filters} />}
    <Content>
      {params.searchInput && <SearchInput />}
      <div className={`btn-group ${style.dataActions}`} role='group'>
        <button className='btn btn-outline-success btn-sm'>
          <Icon className='fa fa-refresh' />
        </button>
      </div>
      {params.table && <TableGeneratorResult table={params.table} />}
      {params.pagination && <Pagination />}
    </Content>
  </div>
)

export default ContentManagement
