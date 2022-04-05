import { combineReducers } from 'redux'
import auth from './auth'
import customer from './customer'
import tournament from './tournament'
import table from './table'

export default combineReducers({
  auth,
  customer,
  tournament,
  table,
})
