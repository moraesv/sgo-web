import React, { Fragment } from 'react'
import { Redirect, Router, Switch, Route } from 'react-router-dom'

import history from '../../utils/history'

import GlobalStyles from '../../styles/GlobalStyles'
import GlobalClasses from '../../styles/GlobalClasses'
import GlobalFonts from '../../styles/GlobalFonts'

import Main from '../Main'

import routes from '../../routes'
import Header from '../Header'
import Sidebar from '../Sidebar'

function Layout() {
  return (
    <>
      <GlobalStyles />
      <GlobalClasses />
      <GlobalFonts />
      <Router history={history}>
        <Switch>
          {routes.map((route, key) => {
            if (route.hideLayout) {
              return (
                <Route
                  key={key}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                />
              )
            }
            return (
              <Fragment key={key}>
                <Header pageName={route.pageName} />
                <Sidebar />
                <Main>
                  <Route
                    key={key}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                  />
                </Main>
              </Fragment>
            )
          })}
          <Redirect to="/avisos" />
        </Switch>
      </Router>
    </>
  )
}

export default Layout
