import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Customers from '../pages/Customers'
import NewCustomer from '../pages/NewCustomer'
import DetailCustomer from '../pages/DetailCustomer'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/customers">
          <Customers />
        </Route>
        <Route exact path="/customers/new">
          <NewCustomer />
        </Route>
        <Route exact path="/customers/v/:id">
          <DetailCustomer />
        </Route>
      </Switch>
    </Router>
  )
}
