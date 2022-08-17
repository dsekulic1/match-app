import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from 'pages/Home'
import PageNotFound from 'pages/PageNotFound'

import { homeUrl } from 'utilities/appUrls'

const Routes = () => {
  return (
    <Switch>
      <Route exact path={homeUrl} component={Home} />
      <Route component={PageNotFound} />
    </Switch>
  )
}

export default Routes
