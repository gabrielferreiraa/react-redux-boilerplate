'use strict'

import React from 'react'
import Icon from 'components/Icon'
import { connect } from 'react-redux'

const HeaderFilters = props => {
  const { activeMenu } = props

  return (
    <div>
      <Icon className={activeMenu.icon} />
      <h5>
        <b>{activeMenu.text}</b>
      </h5>
    </div>
  )
}

const mapStateToProps = state => ({ activeMenu: state.sidebar.activeMenu })
export default connect(mapStateToProps, null)(HeaderFilters)
