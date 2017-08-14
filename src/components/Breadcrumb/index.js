'use strict'

import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import routes from 'src/rootRoutes'
import activeRoute from 'utils/ActiveRoute'

const hasBarOnFirst = route => route.length > 1 && route.charAt(0) === '/'

const findRouteName = url => routes[`/${activeRoute(url)}`]

const getPaths = pathname => {

  const paths = pathname === '/dashboard' ? ['/'] : ['/dashboard']

  if (pathname === '/') return paths

  pathname = !hasBarOnFirst(pathname) ? activeRoute(pathname) : `/${activeRoute(pathname)}`

  pathname.split('/').reduce((prev, curr, index) => {
    const currPath = `${prev}/${curr}`
    paths.push(currPath)
    return currPath
  })

  return paths
}

const BreadcrumbsItem = ({ ...rest, match }) => {
  const routeName = findRouteName(match.url)

  if (routeName) {
    return (
      match.isExact
        ? <BreadcrumbItem active>{routeName}</BreadcrumbItem>
        : (
          <BreadcrumbItem>
            <Link to={match.url || ''}>
              {routeName}
            </Link>
          </BreadcrumbItem>
        )
    )
  }
  return null
}

const Breadcrumbs = ({ ...rest, location: { pathname }, match }) => {
  const paths = getPaths(pathname)

  return (
    <Breadcrumb>
      {paths.map((path, index) => <Route key={index} path={path} component={BreadcrumbsItem} />)}
    </Breadcrumb>
  )
}

export default props => (
  <div>
    <Route path='/:path' component={Breadcrumbs} {...props} />
  </div>
)
