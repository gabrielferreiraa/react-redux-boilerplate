'use strict'

import React from 'react'
import Icon from 'components/icon'
import MenuItem from './menu-item'

const MenuTree = ({ activeRoute, activateSingleRoute, handleClick, item }) => {
  return (
    <li className={activeRoute(item.route)}>
      <a className='nav-link nav-dropdown-toggle' href='#' onClick={handleClick}>
        {item.icon && <Icon className={item.icon} />}
        {item.text}
      </a>
      <ul className='nav-dropdown-items'>
        {item.children.map((item, index) => {
          return item.parent === false
            ? <MenuItem {...item} activeRoute={activateSingleRoute} key={index} />
            : <MenuTree
              activeRoute={activeRoute}
              handleClick={handleClick}
              activateSingleRoute={activateSingleRoute}
              item={item}
              key={index}
              />
        })}
      </ul>
    </li>
  )
}

export default MenuTree
