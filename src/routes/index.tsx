import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Customers from '../pages/Customers'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/customers">
          <Customers />
        </Route>
      </Switch>
    </Router>
  )
}
