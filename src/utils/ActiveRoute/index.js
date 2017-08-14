'use strict'

const hasBarOnFirst = route => route.charAt(0) === '/'
const hasChild = route => route.split('/').length > 1

const activeRoute = route => {
  route = hasBarOnFirst(route) ? route.substr(1) : route

  if (hasChild(route)) {
    route = route.split('/')[0]
  }

  return route
}

export default activeRoute
