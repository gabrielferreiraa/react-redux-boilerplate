'use strict'

import React from 'react'
import Icon from 'utils/Icon'
import { Link } from 'react-router'

const MenuItem = ({ ...item }) => {
  const { route, icon, text } = item

  return (
    <li className='nav-item'>
      <Link to={route}
        className='nav-link'
        activeClassName='active'>
        <Icon className={icon} />
        {text}
      </Link>
    </li>
  )
}

export default MenuItem
