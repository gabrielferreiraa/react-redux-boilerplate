'use strict'

import React from 'react'
import style from './css/filters'

const Filters = ({ filters }) => (
  <aside className={`${style.filterContent} ${filters.open ? style.open : ''}`}>
    {filters.content.map((item, index) => {
      switch (item.component) {
        case 'input':
          return (
            <div key={index} className={style.sectionFilter}>
              <label className={style.labelFilter}>{item.label}</label>
              <input
                type='text'
                className='form-control'
                placeholder={item.placeholder}
              />
            </div>
          )
        case 'select':
          return (
            <div key={index} className={style.sectionFilter}>
              <label className={style.labelFilter}>{item.label}</label>
              <select className='form-control'>
                {Object.keys(item.data).map((key, index) => <option key={index} value={key}>{item.data[ key ]}</option>)}
              </select>
            </div>
          )
      }
    })}

    <button type='button' className={`btn btn-outline-info ${style.btnFilter}`}>
      Filtrar
    </button>
  </aside>
)

export default Filters
