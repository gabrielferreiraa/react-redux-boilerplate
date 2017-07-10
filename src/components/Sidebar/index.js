import React, { Component } from 'react'
import { Link } from 'react-router'
import Icon from 'utils/Icon'

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
              <Link to={'/dashboard'} 
                    className='nav-link' 
                    activeClassName='active'> 
                    <Icon className='icon-speedometer' />
                    Dashboard
              </Link>
            </li>
            <li className={this.activeRoute('/components')}>
              <a className='nav-link nav-dropdown-toggle' href='#' onClick={this.handleClick.bind(this)}><i className='icon-puzzle' /> Components</a>
              <ul className='nav-dropdown-items'>
                <li className='nav-item'>
                  <Link to={'/participants'} className='nav-link' activeClassName='active'><i className='icon-user' /> Participantes</Link>
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
