'use strict'

import React from 'react'
import Icon from 'utils/Icon'
import MenuItem from './MenuItem'

const MenuTree = ({ activeRoute, handleClick, item }) => {
  return (
    <li className={activeRoute('/components')}>
      <a className='nav-link nav-dropdown-toggle' href='#' onClick={handleClick}>
        <Icon className={item.icon} />
        {item.text}
      </a>
      <ul className='nav-dropdown-items'>
        {item.children.map((item, index) => {
          return item.parent === false
            ? <MenuItem {...item} key={index} />
            : <MenuTree
              activeRoute={activeRoute}
              handleClick={handleClick}
              item={item}
              key={index}
              />
        })}
      </ul>
    </li>
  )
}

export default MenuTree
