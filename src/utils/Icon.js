'use strict'

import React from 'react'
import { string } from 'prop-types'

const Icon = ({ className, ...params }) =>  <i className={className} />

Icon.propTypes = {
    className: string.isRequired
}

export default Icon