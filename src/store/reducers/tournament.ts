import { Tournament } from '../../types'
import {
  LIST_TOURNAMENTS_SUCCESS,
  GET_TOURNAMENT_SUCCESS,
  CREATE_TOURNAMENT_SUCCESS,
  UPDATE_QUERY_TOURNAMENT,
  UPDATE_TOURNAMENT_SUCCESS,
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
    case CREATE_TOURNAMENT_SUCCESS:
      const tournament = payload.tournament as Tournament
      const arr = [...state.data]
      arr.push(tournament)
      return {
        ...state,
        data: arr,
        selected: tournament,
      }
    case LIST_TOURNAMENTS_SUCCESS:
      return {
        ...state,
        data: payload.tournaments,
        query: {
          ...state.query,
          limit: payload.query.limit,
          page: payload.query.page,
        },
        totalCount: payload.totalCount,
      }
    case GET_TOURNAMENT_SUCCESS:
      return {
        ...state,
        selected: payload.tournament,
      }
    case UPDATE_TOURNAMENT_SUCCESS:
      const newArr = [...state.data]
      const idx = newArr.findIndex((row) => row._id === payload.tournament._id)
      newArr[idx] = payload.tournament
      return {
        ...state,
        selected: payload.tournament,
        data: newArr,
      }
    case UPDATE_QUERY_TOURNAMENT:
      return {
        ...state,
        query: payload.query,
      }
    default:
      return state
  }
}
