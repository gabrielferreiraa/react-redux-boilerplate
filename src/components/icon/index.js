'use strict'

import React from 'react'
import { string } from 'prop-types'

const Icon = ({ className, ...params }) => <i className={className} />

Icon.defaultProps = {
  className: 'icon-star'
}

Icon.propTypes = {
  className: string
}

export default Icon
