import { combineReducers } from 'redux'
import auth from './auth'
import customer from './customer'
import tournament from './tournament'

export default combineReducers({
  auth,
  customer,
  tournament,
})
