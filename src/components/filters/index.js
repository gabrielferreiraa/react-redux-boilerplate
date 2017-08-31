'use strict'

import React, { Component } from 'react'
import Icon from 'components/icon'
import style from './css/filters'

class Filters extends Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false
    }
  }

  render () {
    const { filters } = this.props

    return (
      <div>
        <button className={`btn btn-info ${style.btnFilterToggle} ${this.state.open ? style.open : ''}`} onClick={() => this.setState({ open: !this.state.open })}>
          <Icon className='fa fa-filter' />
          &nbsp;Filtros
        </button>
        <aside className={`${style.filterContent} ${this.state.open ? style.open : ''}`}>
          {filters.map((item, index) => {
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
      </div>
    )
  }
}

export default Filters
