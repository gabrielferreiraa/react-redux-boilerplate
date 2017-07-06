import React, { Component } from 'react'
import { Link } from 'react-router'

class Sidebar extends Component {
  handleClick (e) {
    e.preventDefault()
    e.target.parentElement.classList.toggle('open')
  }

  activeRoute (routeName) {
    return this.props.location.pathname.includes(routeName) ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown'
  }

  render () {
    return (
      <div className='sidebar'>
        <nav className='sidebar-nav'>
          <ul className='nav'>
            <li className='nav-item'>
              <Link to={'/dashboard'} className='nav-link' activeClassName='active'><i className='material-icons'>dashboard</i> Dashboard <span className='badge badge-info'>NEW</span></Link>
            </li>
            <li className={this.activeRoute('/components')}>
              <a className='nav-link nav-dropdown-toggle' href='#' onClick={this.handleClick.bind(this)}><i className='icon-puzzle' /> Components</a>
              <ul className='nav-dropdown-items'>
                <li className='nav-item'>
                  <Link to={'/participants'} className='nav-link' activeClassName='active'><i className='material-icons'>person</i> Participantes</Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/components/social-buttons'} className='nav-link' activeClassName='active'><i className='icon-puzzle' /> Social Buttons</Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/components/cards'} className='nav-link' activeClassName='active'><i className='icon-puzzle' /> Cards</Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/components/forms'} className='nav-link' activeClassName='active'><i className='icon-puzzle' /> Forms</Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/components/modals'} className='nav-link' activeClassName='active'><i className='icon-puzzle' /> Modals</Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/components/switches'} className='nav-link' activeClassName='active'><i className='icon-puzzle' /> Switches</Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/components/tables'} className='nav-link' activeClassName='active'><i className='icon-puzzle' /> Tables</Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/components/tabs'} className='nav-link' activeClassName='active'><i className='icon-puzzle' /> Tabs</Link>
                </li>
              </ul>
            </li>
            <li className={this.activeRoute('/icons')}>
              <a className='nav-link nav-dropdown-toggle' href='#' onClick={this.handleClick.bind(this)}><i className='icon-star' /> Icons</a>
              <ul className='nav-dropdown-items'>
                <li className='nav-item'>
                  <Link to={'/icons/font-awesome'} className='nav-link' activeClassName='active'><i className='icon-star' /> Font Awesome</Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/icons/simple-line-icons'} className='nav-link' activeClassName='active'><i className='icon-star' /> Simple Line Icons</Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <Link to={'/widgets'} className='nav-link' activeClassName='active'><i className='icon-calculator' /> Widgets <span className='badge badge-info'>NEW</span></Link>
            </li>
            <li className='nav-item'>
              <Link to={'/charts'} className='nav-link' activeClassName='active'><i className='icon-pie-chart' /> Charts</Link>
            </li>
            <li className='nav-item nav-dropdown'>
              <a className='nav-link nav-dropdown-toggle' href='#' onClick={this.handleClick.bind(this)}><i className='icon-star' /> Pages</a>
              <ul className='nav-dropdown-items'>
                <li className='nav-item'>
                  <Link to={'/login'} className='nav-link' activeClassName='active'><i className='icon-star' /> Login</Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/register'} className='nav-link' activeClassName='active'><i className='icon-star' /> Register</Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/404'} className='nav-link' activeClassName='active'><i className='icon-star' /> Error 404</Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/500'} className='nav-link' activeClassName='active'><i className='icon-star' /> Error 500</Link>
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
