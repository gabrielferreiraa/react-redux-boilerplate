import React, { Component } from 'react'
import Globals from 'utils/Globals'

class Footer extends Component {
  render () {
    return (
      <footer className='app-footer'>
        <a href='#'>{Globals.nameProject}</a> &copy; 2017 creativeLabs.
        <span className='float-right'>Powered by <a href='#'>{Globals.author}</a></span>
      </footer>
    )
  }
}

export default Footer
