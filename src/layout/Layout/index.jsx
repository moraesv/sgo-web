import React from 'react'
import { Redirect, Router, Switch, Route } from 'react-router-dom'

import history from '../../utils/history'

import GlobalStyles from '../../styles/GlobalStyles'
import GlobalClasses from '../../styles/GlobalClasses'
import GlobalFonts from '../../styles/GlobalFonts'

import Main from '../Main'

import routes from '../../routes'

function Layout() {
  return (
    <>
      <GlobalStyles />
      <GlobalClasses />
      <GlobalFonts />
      <Router history={history}>
        <Main>
          <Switch>
            {routes.map((route, key) => {
              return (
                <Route
                  key={key}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                />
              )
            })}
            <Redirect to="/" />
          </Switch>
        </Main>
      </Router>
    </>
  )
}

export default Layout
