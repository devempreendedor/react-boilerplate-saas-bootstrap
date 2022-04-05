import { table } from '../../types'
import {
  LIST_TABLES_SUCCESS,
  GET_TABLE_SUCCESS,
  CREATE_TABLE_SUCCESS,
  UPDATE_QUERY_TABLE,
  UPDATE_TABLE_SUCCESS,
} from '../types'

const initialState = {
  data: [],
  selected: null,
  query: {
    sort: '',
    limit: '10',
    page: '1',
    q: '',
    sort: 'name:asc',
  },
  totalCount: 0,
}

export default function (state = initialState, action: any) {
  const { type, payload } = action

  switch (type) {
    case CREATE_TABLE_SUCCESS:
      const table = payload.table as table
      const arr = [...state.data]
      arr.push(table)
      return {
        ...state,
        data: arr,
        selected: table,
      }
    case LIST_TABLES_SUCCESS:
      return {
        ...state,
        data: payload.tables,
        query: {
          ...state.query,
          limit: payload.query.limit,
          page: payload.query.page,
        },
        totalCount: payload.totalCount,
      }
    case GET_TABLE_SUCCESS:
      return {
        ...state,
        selected: payload.table,
      }
    case UPDATE_TABLE_SUCCESS:
      const newArr = [...state.data]
      const idx = newArr.findIndex((row) => row._id === payload.table._id)
      newArr[idx] = payload.table
      return {
        ...state,
        selected: payload.table,
        data: newArr,
      }
    case UPDATE_QUERY_TABLE:
      return {
        ...state,
        query: payload.query,
      }
    default:
      return state
  }
}
