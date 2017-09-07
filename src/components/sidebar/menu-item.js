'use strict'

import React from 'react'
import Icon from 'components/icon'
import { NavLink } from 'react-router-dom'
import { func, string } from 'prop-types'

const MenuItem = ({ activeRoute, ...item }) => {
  const { route, icon, text } = item

  return (
    <li className={`nav-item ${activeRoute(route)}`}>
      <NavLink to={route}
        className='nav-link'
        activeClassName='active'>
        {icon && <Icon className={icon} />}
        {text}
      </NavLink>
    </li>
  )
}

MenuItem.propTypes = {
  activeRoute: func.isRequired,
  route: string.isRequired,
  icon: string,
  text: string
}

export default MenuItem
