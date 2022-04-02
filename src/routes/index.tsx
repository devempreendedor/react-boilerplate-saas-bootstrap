import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

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
        <PrivateRoute exact path="/customers/new">
          <NewCustomer />
        </PrivateRoute>
        <PrivateRoute exact path="/customers/v/:id">
          <DetailCustomer />
        </PrivateRoute>
      </Switch>
    </Router>
  )
}
