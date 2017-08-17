'use strict'

import React from 'react'
import Pagination from './index'
import style from './css/Pagination'

const Text = ({ registersTotal, total }) => (
  <div className={style.paginationSection}>
    <small>Mostrando 1 a 10 de {registersTotal} registros</small>
    <Pagination total={50} activePage={23} pageLink='https://mypage.com.br/%pageNumber%' />
  </div>
)

export default Text
