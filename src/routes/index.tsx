import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
//Pages
import Customers from '../pages/Customers'
import NewCustomer from '../pages/NewCustomer'
import DetailCustomer from '../pages/DetailCustomer'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/customers">
          <Customers />
        </PrivateRoute>
        <PublicRoute exact path="/customers/new">
          <NewCustomer />
        </PublicRoute>
        <PublicRoute exact path="/customers/v/:id">
          <DetailCustomer />
        </PublicRoute>
      </Switch>
    </Router>
  )
}
