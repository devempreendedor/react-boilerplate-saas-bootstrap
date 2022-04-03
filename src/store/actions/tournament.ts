import {
  LIST_TOURNAMENTS_SUCCESS,
  GET_TOURNAMENT_SUCCESS,
  CREATE_TOURNAMENT_SUCCESS,
  UPDATE_QUERY_TOURNAMENT,
  UPDATE_TOURNAMENT_SUCCESS,
} from '../types'
import { tournamentService } from '../../services'
import toast from 'react-hot-toast'
import { Tournament, TournamentInput, TournamentParams } from '../../types'

export const create = (values: TournamentInput) => async (dispatch: any) => {
  try {
    const response = await tournamentService.create(values)
    if (response.status === 201) {
      toast.success('TOrneio criado com sucesso!')
      dispatch({
        type: CREATE_TOURNAMENT_SUCCESS,
        payload: {
          tournament: response.data,
        },
      })
    }
    return response
  } catch (error) {
    toast.error(error?.message)
  }
}

export const list = (params?: TournamentParams) => async (dispatch: any) => {
  try {
    const response = await tournamentService.list(params)
    if (response.status === 200) {
      dispatch({
        type: LIST_TOURNAMENTS_SUCCESS,
        payload: {
          tournaments: response.data?.results,
          query: {
            limit: response?.data.limit,
            page: response?.data.page,
          },
          totalCount: response?.data.total,
        },
      })
    }
    return response
  } catch (error) {
    toast.error(error?.message)
  }
}

export const find = (id: string) => async (dispatch: any) => {
  try {
    const response = await tournamentService.findById(id)
    if (response.status === 200) {
      dispatch({
        type: GET_TOURNAMENT_SUCCESS,
        payload: {
          tournament: response.data,
        },
      })
    }
    return response
  } catch (error) {
    toast.error(error?.message)
  }
}

export const update =
  (id: string, body: Tournament) => async (dispatch: any) => {
    try {
      const response = await tournamentService.update(id, body)
      if (response.status === 200) {
        toast.success('TOrneio editado')
        dispatch({
          type: UPDATE_TOURNAMENT_SUCCESS,
          payload: {
            tournament: response.data,
          },
        })
      }
      return response
    } catch (error) {
      toast.error(error?.message)
    }
  }

export const setQuery = (query: TournamentParams) => async (dispatch: any) => {
  dispatch({
    type: UPDATE_QUERY_TOURNAMENT,
    payload: {
      query,
    },
  })
}
