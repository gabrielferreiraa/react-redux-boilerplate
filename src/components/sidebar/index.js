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

    this._handleClick = this._handleClick.bind(this)
    this._activateTreeRoute = this._activateTreeRoute.bind(this)
    this._activateSingleRoute = this._activateSingleRoute.bind(this)
    this._renderMenus = this._renderMenus.bind(this)
  }

  _handleClick (e) {
    e.preventDefault()
    e.target.parentElement.classList.toggle('open')
  }

  _activateTreeRoute (routeName) {
    const activeMenu = this.props.menus.filter(menu => {
      return menu.parent
        ? menu.children.filter(menu => menu.route === this.props.location.pathname)
        : menu.route === this.props.location.pathname
    })

    !!activeMenu[0] && this.props.select(activeMenu[0])

    if (routeName === '') return 'nav-item nav-dropdown'

    return this.props.location.pathname.includes(routeName) ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown'
  }

  _activateSingleRoute (routeName) {
    const activeMenu = this.props.menus.filter(menu => menu.route === routeName)
    !!activeMenu[0] && this.props.select(activeMenu[0])
  }

  _renderMenus (menus = []) {
    return menus.map((item, index) => (
      item.parent === false
        ? <MenuItem {...item} activeRoute={this._activateSingleRoute} key={index} />
        : <MenuTree
          activeRoute={this._activateTreeRoute}
          activateSingleRoute={this._activateSingleRoute}
          handleClick={this._handleClick}
          item={item}
          key={index}
      />
    ))
  }

  componentDidMount () {
    this.props.fetch()
  }

  render () {
    return (
      <div className='sidebar'>
        <nav className='sidebar-nav'>
          <input type='text' className={style.filterMenus} placeholder='Filtrar menus' onChange={this.props.search} />
          <ul className='nav'>
            {this._renderMenus(this.props.menus)}
          </ul>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = state => ({ menus: state.sidebar.menus })
const mapDispatchToProps = dispatch => bindActionCreators({ fetch, search, select }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
