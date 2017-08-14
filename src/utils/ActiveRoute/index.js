'use strict'

const hasBarOnFirst = route => route.length > 1 && route.charAt(0) === '/'
const hasChild = route => route.length > 1 && route.split('/').length > 1
const isString = route => typeof route === 'string'

const activeRoute = (route = '/') => {
  if (!isString(route)) {
    throw new TypeError('route should be a string')
  }

  route = hasBarOnFirst(route) ? route.substr(1) : route

  if (hasChild(route)) {
    route = route.split('/')[0]
  }

  return route
}

export default activeRoute
