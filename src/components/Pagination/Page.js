'use strict'

import React from 'react'

const Page = ({ page, pageLink }) => {
  const isReticence = page => page === '...'
  const Component = isReticence(page) ? 'span' : 'a'
  const href = isReticence(page) ? null : pageLink

  return (
    <Component href={href}>
      {page}
    </Component>
  )
}

export default Page
