import { LIST_CUSTOMERS_SUCCESS, GET_CUSTOMER_SUCCESS } from '../types'

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
    default:
      return state
  }
}
