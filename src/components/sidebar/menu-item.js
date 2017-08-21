'use strict'

import React from 'react'
import Icon from 'components/icon'
import { NavLink } from 'react-router-dom'

const MenuItem = ({ ...item }) => {
  const { route, icon, text } = item

  return (
    <li className='nav-item'>
      <NavLink to={route}
        className='nav-link'
        activeClassName='active'>
        {icon && <Icon className={icon} />}
        {text}
      </NavLink>
    </li>
  )
}

export default MenuItem
