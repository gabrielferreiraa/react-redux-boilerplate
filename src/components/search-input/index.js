'use strict'

import React from 'react'
import style from './css/search-input'

const SearchInput = () => <input type='text' className={`form-control ${style.searchInput}`} placeholder='&#xf002; Busca' />

export default SearchInput
