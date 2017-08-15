'use strict'

import React from 'react'

const Page = ({ page, pageLink }) => {
  const isReticence = page => page === '...'
  const href = isReticence(page) ? 'javascript:void(0)' : pageLink

  return <a href={href}>{page}</a>
}

export default Page
