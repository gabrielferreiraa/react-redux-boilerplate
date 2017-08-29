'use strict'

import React from 'react'
import { string } from 'prop-types'
import 'font-awesome/css/font-awesome.min'

const Icon = ({ className, ...params }) => <i className={className} {...params} />

Icon.defaultProps = {
  className: 'star'
}

Icon.propTypes = {
  className: string
}

export default Icon
