import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
      <Router>
        <Switch>
          {routes.map((route, key) => {
            if (!route.admin) {
              return (
                <Route
                  key={key}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                />
              )
            }
            return null
          })}

          <Route
            path={'/'}
            render={() => {
              return (
                <>
                  <Main>
                    <Sidebar />
                    <Switch>
                      {routes.map((route, key) => {
                        if (route.admin) {
                          return (
                            <Route
                              key={key}
                              path={route.path}
                              render={() => {
                                const Component = route.component
                                return (
                                  <>
                                    <Header pageName={route.pageName} />
                                    <Component />
                                  </>
                                )
                              }}
                              exact={route.exact}
                            />
                          )
                        }
                        return null
                      })}
                    </Switch>
                  </Main>
                </>
              )
            }}
          />
        </Switch>
      </Router>
    </>
  )
}

export default Layout
