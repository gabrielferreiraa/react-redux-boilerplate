'use strict'

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggle } from 'reducers/sidebar/action-creators'
import { logout } from 'reducers/auth/action-creators'

class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      actionsOpen: false,
      alertsOpen: false
    }

    this.toggle = this.toggle.bind(this)
    this.toggleAlert = this.toggleAlert.bind(this)
    this.sidebarToggle = this.sidebarToggle.bind(this)
  }

  toggle () {
    this.setState({
      actionsOpen: !this.state.actionsOpen
    })
  }

  toggleAlert () {
    this.setState({
      alertsOpen: !this.state.alertsOpen
    })
  }

  sidebarToggle () {
    this.props.toggle()
  }

  fullscreenToggle (e) {
    e.preventDefault()
    const elem = document.querySelector('html')

    if (!elem.fullscreenElement &&
      !elem.mozFullScreenElement &&
      !elem.webkitFullscreenElement &&
      !elem.msFullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen()
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen()
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen()
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen()
      }
    } else {
      if (elem.exitFullscreen) {
        elem.exitFullscreen()
      } else if (elem.msExitFullscreen) {
        elem.msExitFullscreen()
      } else if (elem.mozCancelFullScreen) {
        elem.mozCancelFullScreen()
      } else if (elem.webkitExitFullscreen) {
        elem.webkitExitFullscreen()
      }
    }
  }

  sidebarMinimize (e) {
    e.preventDefault()
    document.body.classList.toggle('sidebar-minimized')
  }

  mobileSidebarToggle (e) {
    e.preventDefault()
    document.body.classList.toggle('sidebar-mobile-show')
  }

  asideToggle (e) {
    e.preventDefault()
    document.body.classList.toggle('aside-menu-hidden')
  }

  render () {
    return (
      <header className='app-header navbar'>
        <button className='navbar-toggler mobile-sidebar-toggler d-lg-none' type='button'
          onClick={this.mobileSidebarToggle}>&#9776;</button>
        <a className='navbar-brand' href='#' />
        <ul className='nav navbar-nav d-md-down-none'>
          <li className='nav-item'>
            <button className='nav-link navbar-toggler sidebar-toggler' type='button'
              onClick={this.sidebarToggle}>&#9776;</button>
          </li>
          <li className='nav-item'>
            <button className='nav-link' type='button' title='Fullscreen' onClick={this.fullscreenToggle}>
              <i className='fa fa-expand' />
            </button>
          </li>
        </ul>
        <ul className='nav navbar-nav ml-auto'>
          <li className='nav-item d-md-down-none'>
            {!this.props.isOnline && <small><b>Você está OFFLINE</b></small>}
          </li>
          <li className='nav-item d-md-down-none'>
            <button onClick={this.toggleAlert} className='nav-link' data-toggle='dropdown' type='button' aria-haspopup='true' aria-expanded={this.state.alertsOpen}>
              <i className='fa fa-bell-o' />
              <span className='badge badge-pill badge-danger'>5</span>
            </button>
            <Dropdown isOpen={this.state.alertsOpen} toggle={this.toggleAlert}>
              <DropdownMenu className='dropdown-menu-right'>
                <DropdownItem>
                  <div className='callout callout-success m-0 py-3'>
                    <div>General Report success</div>
                    <small className='text-muted'><i className='fa fa-calendar' />15:28</small>
                  </div>
                </DropdownItem>
                <DropdownItem>
                  <div className='callout callout-error m-0 py-3'>
                    <div>Report Failure</div>
                    <small className='text-muted'><i className='fa fa-calendar' />15:28</small>
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </li>
          <li className='nav-item d-md-down-none'>
            <a className='nav-link' href='#'>
              <i className='fa fa-map-marker' />
            </a>
          </li>
          <li className='nav-item d-md-down-none'>
            <button type='button' className='nav-link' onClick={() => this.props.logout(this.props)}>
              <i className='fa fa-sign-out' />
            </button>
          </li>
          <li className='nav-item'>
            <Dropdown isOpen={this.state.actionsOpen} toggle={this.toggle}>
              <button onClick={this.toggle} className='nav-link dropdown-toggle' data-toggle='dropdown' type='button'
                aria-haspopup='true' aria-expanded={this.state.actionsOpen}>
                <img src={'/public/img/avatars/6.jpg'} className='img-avatar' alt='admin@bootstrapmaster.com' />
                <span className='d-md-down-none'>admin</span>
              </button>

              <DropdownMenu className='dropdown-menu-right'>
                <DropdownItem header className='text-center'><strong>Account</strong></DropdownItem>

                <DropdownItem><i className='fa fa-bell-o' /> Updates<span
                  className='badge badge-info'>42</span></DropdownItem>
                <DropdownItem><i className='fa fa-envelope-o' /> Messages<span className='badge badge-success'>42</span></DropdownItem>
                <DropdownItem><i className='fa fa-tasks' /> Tasks<span
                  className='badge badge-danger'>42</span></DropdownItem>
                <DropdownItem><i className='fa fa-comments' /> Comments<span
                  className='badge badge-warning'>42</span></DropdownItem>

                <DropdownItem header className='text-center'><strong>Settings</strong></DropdownItem>

                <DropdownItem><i className='fa fa-user' /> Profile</DropdownItem>
                <DropdownItem><i className='fa fa-wrench' /> Settings</DropdownItem>
                <DropdownItem><i className='fa fa-usd' /> Payments<span
                  className='badge badge-default'>42</span></DropdownItem>
                <DropdownItem><i className='fa fa-file' /> Projects<span
                  className='badge badge-primary'>42</span></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><i className='fa fa-shield' /> Lock Account</DropdownItem>

              </DropdownMenu>
            </Dropdown>
          </li>
          <li className='nav-item d-md-down-none'>
            <button className='nav-link navbar-toggler aside-menu-toggler' type='button'
              onClick={this.asideToggle}>&#9776;</button>
          </li>
        </ul>
      </header>
    )
  }
}

const mapStateToProps = state => ({ isOnline: state.app.isOnline })
const mapDispatchToProps = dispatch => bindActionCreators({ toggle, logout }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))
