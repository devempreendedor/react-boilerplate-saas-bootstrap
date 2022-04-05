import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
//Pages

import {
  ListTournaments,
  NewTournaments,
  ListCustomers,
  EditCustomer,
  NewCustomer,
  ViewCustomer,
  EditTournament,
  Login,
  ViewTournament,
  ListTables,
} from '../pages'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/login">
          <Login />
        </PublicRoute>

        <PrivateRoute exact path="/tables">
          <ListTables />
        </PrivateRoute>

        <PrivateRoute exact path="/customers">
          <ListCustomers />
        </PrivateRoute>
        <PrivateRoute exact path="/customers/new">
          <NewCustomer />
        </PrivateRoute>
        <PrivateRoute exact path="/customers/v/:id">
          <ViewCustomer />
        </PrivateRoute>
        <PrivateRoute exact path="/customers/e/:id">
          <EditCustomer />
        </PrivateRoute>

        <PrivateRoute exact path="/tournaments">
          <ListTournaments />
        </PrivateRoute>
        <PrivateRoute exact path="/tournaments/new">
          <NewTournaments />
        </PrivateRoute>
        <PrivateRoute path="/tournaments/e/:id">
          <EditTournament />
        </PrivateRoute>
        <PrivateRoute path="/tournaments/v/:id">
          <ViewTournament />
        </PrivateRoute>
      </Switch>
    </Router>
  )
}
