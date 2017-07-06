import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Sidebar extends Component {
  handleClick (e) {
    e.preventDefault()
    e.target.parentElement.classList.toggle('open')
  }

  activeRoute (routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown'
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render () {
    return (
      <div className='sidebar'>
        <nav className='sidebar-nav'>
          <ul className='nav'>
            <li className='nav-item'>
              <NavLink to={'/dashboard'} className='nav-link' activeClassName='active'><i className='icon-speedometer' /> Dashboard <span className='badge badge-info'>NEW</span></NavLink>
            </li>
            <li className='nav-title'>
              UI Elements
            </li>
            <li className={this.activeRoute('/components')}>
              <a className='nav-link nav-dropdown-toggle' href='#' onClick={this.handleClick.bind(this)}><i className='icon-puzzle' /> Components</a>
              <ul className='nav-dropdown-items'>
                <li className='nav-item'>
                  <NavLink to={'/components/buttons'} className='nav-link' activeClassName='active'><i className='icon-puzzle' /> Buttons</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to={'/components/social-buttons'} className='nav-link' activeClassName='active'><i className='icon-puzzle' /> Social Buttons</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to={'/components/cards'} className='nav-link' activeClassName='active'><i className='icon-puzzle' /> Cards</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to={'/components/forms'} className='nav-link' activeClassName='active'><i className='icon-puzzle' /> Forms</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to={'/components/modals'} className='nav-link' activeClassName='active'><i className='icon-puzzle' /> Modals</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to={'/components/switches'} className='nav-link' activeClassName='active'><i className='icon-puzzle' /> Switches</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to={'/components/tables'} className='nav-link' activeClassName='active'><i className='icon-puzzle' /> Tables</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to={'/components/tabs'} className='nav-link' activeClassName='active'><i className='icon-puzzle' /> Tabs</NavLink>
                </li>
              </ul>
            </li>
            <li className={this.activeRoute('/icons')}>
              <a className='nav-link nav-dropdown-toggle' href='#' onClick={this.handleClick.bind(this)}><i className='icon-star' /> Icons</a>
              <ul className='nav-dropdown-items'>
                <li className='nav-item'>
                  <NavLink to={'/icons/font-awesome'} className='nav-link' activeClassName='active'><i className='icon-star' /> Font Awesome</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to={'/icons/simple-line-icons'} className='nav-link' activeClassName='active'><i className='icon-star' /> Simple Line Icons</NavLink>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <NavLink to={'/widgets'} className='nav-link' activeClassName='active'><i className='icon-calculator' /> Widgets <span className='badge badge-info'>NEW</span></NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to={'/charts'} className='nav-link' activeClassName='active'><i className='icon-pie-chart' /> Charts</NavLink>
            </li>
            <li className='divider' />
            <li className='nav-title'>
              Extras
            </li>
            <li className='nav-item nav-dropdown'>
              <a className='nav-link nav-dropdown-toggle' href='#' onClick={this.handleClick.bind(this)}><i className='icon-star' /> Pages</a>
              <ul className='nav-dropdown-items'>
                <li className='nav-item'>
                  <NavLink to={'/login'} className='nav-link' activeClassName='active'><i className='icon-star' /> Login</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to={'/register'} className='nav-link' activeClassName='active'><i className='icon-star' /> Register</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to={'/404'} className='nav-link' activeClassName='active'><i className='icon-star' /> Error 404</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to={'/500'} className='nav-link' activeClassName='active'><i className='icon-star' /> Error 500</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar
