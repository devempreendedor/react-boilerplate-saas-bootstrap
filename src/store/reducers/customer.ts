import { Customer } from '../../types'
import {
  LIST_CUSTOMERS_SUCCESS,
  GET_CUSTOMER_SUCCESS,
  CREATE_CUSTOMER_SUCCESS,
  UPDATE_QUERY_CUSTOMER,
} from '../types'

const initialState = {
  data: [],
  selected: null,
  query: {
    sort: '',
    limit: '10',
    page: '1',
    q: '',
  },
  totalCount: 0,
}

export default function (state = initialState, action: any) {
  const { type, payload } = action

  switch (type) {
    case CREATE_CUSTOMER_SUCCESS:
      const customer = payload.customer as Customer
      const arr = [...state.data]
      arr.push(customer)
      return {
        data: arr,
        selected: customer,
      }
    case LIST_CUSTOMERS_SUCCESS:
      return {
        ...state,
        data: payload.customers,
        query: {
          ...state.query,
          limit: payload.query.limit,
          page: payload.query.page,
        },
        totalCount: payload.totalCount,
      }
    case GET_CUSTOMER_SUCCESS:
      return {
        ...state,
        selected: payload.customer,
      }
    case UPDATE_QUERY_CUSTOMER:
      return {
        ...state,
        query: payload.query,
      }
    default:
      return state
  }
}
