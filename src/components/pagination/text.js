'use strict'

import React from 'react'
import Pagination from './index'
import style from './css/pagination'

const Text = ({ registersTotal, total }) => (
  <div className={style.paginationSection}>
    <small>Mostrando <b>1 a 10</b> de {registersTotal} registros</small>
    <Pagination total={50} activePage={23} pageLink='https://mypage.com.br/%pageNumber%' />
  </div>
)

export default Text
