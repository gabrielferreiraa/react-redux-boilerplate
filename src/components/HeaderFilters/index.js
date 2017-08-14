'use strict'

import React from 'react'
import Icon from 'components/Icon'
import { connect } from 'react-redux'
import style from './css/HeaderFilters'

const HeaderFilters = props => {
  const { activeMenu } = props

  return (
    <div>
      <div className={style.headerFilters}>
        <Icon className={`${activeMenu.icon} ${style.moduleIcon}`} />
        <h5 className={style.moduleName} >
          {activeMenu.text}
        </h5>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ activeMenu: state.sidebar.activeMenu })
export default connect(mapStateToProps, null)(HeaderFilters)
