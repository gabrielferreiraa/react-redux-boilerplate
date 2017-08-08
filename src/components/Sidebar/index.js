'use strict'

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { menusFetched, menuSearched, menuSelected } from 'actions/SidebarActions'

import MenuItem from './MenuItem'
import MenuTree from './MenuTree'

import style from './css/Sidebar'

class Sidebar extends Component {
  constructor (props) {
    super(props)
    this.props.menusFetched()

    this.handleClick = this.handleClick.bind(this)
    this.activeRoute = this.activeRoute.bind(this)
    this.renderMenus = this.renderMenus.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
    e.target.parentElement.classList.toggle('open')
  }

  activeRoute (routeName) {
    const activeMenu = this.props.menus.filter(menu => menu.route === this.props.location.pathname)
    this.props.menuSelected(activeMenu[0])
    return this.props.location.pathname.includes(routeName) ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown'
  }

  renderMenus (menus) {
    return menus.map((item, index) => {
      return item.parent === false
              ? <MenuItem {...item} key={index} />
              : <MenuTree
                activeRoute={this.activeRoute}
                handleClick={this.handleClick}
                item={item}
                key={index}
                />
    })
  }

  render () {
    const { menus } = this.props || []

    return (
      <div className='sidebar'>
        <nav className='sidebar-nav'>
          <input type='text' className={style.filterMenus} placeholder='Filtrar menus' onChange={this.props.menuSearched} />
          <ul className='nav'>
            {this.renderMenus(menus)}
          </ul>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = state => ({ menus: state.sidebar.menus })
const mapDispatchToProps = dispatch => bindActionCreators({ menusFetched, menuSearched, menuSelected }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
