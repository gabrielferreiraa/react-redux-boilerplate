'use strict'

import React from 'react'
import FontAwesome from 'react-fontawesome'
import { string } from 'prop-types'

const Icon = ({ className, ...params }) => <FontAwesome name={className} {...params} />

Icon.defaultProps = {
  className: 'star'
}

Icon.propTypes = {
  className: string
}

export default Icon
