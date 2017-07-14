import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { menusFetched } from 'actions/SidebarActions'

import MenuItem from './MenuItem'
import MenuTree from './MenuTree'

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
    return this.props.location.pathname.includes(routeName) ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown'
  }

  renderMenus (menus) {
    return menus.map((item, index) => {
      return item.parent === false
              ? <MenuItem {...item} />
              : <MenuTree
                activeRoute={this.activeRoute}
                handleClick={this.handleClick}
                item={item}
                />
    })
  }

  render () {
    const { menus } = this.props || []

    return (
      <div className='sidebar'>
        <nav className='sidebar-nav'>
          <ul className='nav'>
            {this.renderMenus(menus)}
          </ul>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = state => ({ menus: state.sidebar.menus })
const mapDispatchToProps = dispatch => bindActionCreators({ menusFetched }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
