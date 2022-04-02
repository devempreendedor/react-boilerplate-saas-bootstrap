import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Customers from '../pages/Customers'
import NewCustomer from '../pages/NewCustomer'

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
      </Switch>
    </Router>
  )
}
