'use strict'

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetch, search, select } from 'reducers/sidebar/action-creators'

import MenuItem from './menu-item'
import MenuTree from './menu-tree'

import style from './css/sidebar'

class Sidebar extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.activateRoute = this.activateRoute.bind(this)
    this.renderMenus = this.renderMenus.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
    e.target.parentElement.classList.toggle('open')
  }

  activateRoute (routeName) {
    const activeMenu = this.props.menus.filter(menu => {
      return menu.parent
        ? menu.children.filter(menu => menu.route === this.props.location.pathname)
        : menu.route === this.props.location.pathname
    })

    if (typeof activeMenu[0] !== 'undefined') {
      this.props.select(activeMenu[0])
    }

    if (routeName === '') {
      return 'nav-item nav-dropdown'
    }

    return this.props.location.pathname.includes(routeName) ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown'
  }

  renderMenus (menus) {
    return menus.map((item, index) => {
      return item.parent === false
              ? <MenuItem {...item} key={index} />
              : <MenuTree
                activeRoute={this.activateRoute}
                handleClick={this.handleClick}
                item={item}
                key={index}
                />
    })
  }

  componentWillMount () {
    this.props.fetch()
  }

  render () {
    const { menus } = this.props || []

    return (
      <div className='sidebar'>
        <nav className='sidebar-nav'>
          <input type='text' className={style.filterMenus} placeholder='Filtrar menus' onChange={this.props.search} />
          <ul className='nav'>
            {this.renderMenus(menus)}
          </ul>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = state => ({ menus: state.sidebar.menus })
const mapDispatchToProps = dispatch => bindActionCreators({ fetch, search, select }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
