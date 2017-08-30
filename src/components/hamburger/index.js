'use strict'

import React from 'react'
import 'hamburgers/dist/hamburgers.min'

const Hamburger = ({ type = 'squeeze' }) => (
  <button className={`hamburger hamburger--${type}`} type='button' onClick={e => e.target.closest('.hamburger').classList.toggle('is-active')}>
    <span className='hamburger-box'>
      <span className='hamburger-inner' />
    </span>
  </button>
)

export default Hamburger
