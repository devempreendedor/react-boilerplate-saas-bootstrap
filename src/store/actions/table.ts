import {
  LIST_TABLES_SUCCESS,
  GET_TABLE_SUCCESS,
  CREATE_TABLE_SUCCESS,
  UPDATE_QUERY_TABLE,
  UPDATE_TABLE_SUCCESS,
} from '../types'
import { tableService } from '../../services'
import toast from 'react-hot-toast'
import { Table, TableInput, TableParams } from '../../types'

export const create = (values: TableInput) => async (dispatch: any) => {
  try {
    const response = await tableService.create(values)
    if (response.status === 201) {
      toast.success('Mesa criado com sucesso!')
      dispatch({
        type: CREATE_TABLE_SUCCESS,
        payload: {
          table: response.data,
        },
      })
    }
    return response
  } catch (error) {
    toast.error(error?.message)
  }
}

export const list = (params?: TableParams) => async (dispatch: any) => {
  try {
    const response = await tableService.list(params)
    if (response.status === 200) {
      dispatch({
        type: LIST_TABLES_SUCCESS,
        payload: {
          tables: response.data?.results,
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
    const response = await tableService.findById(id)
    if (response.status === 200) {
      dispatch({
        type: GET_TABLE_SUCCESS,
        payload: {
          table: response.data,
        },
      })
    }
    return response
  } catch (error) {
    toast.error(error?.message)
  }
}

export const update = (id: string, body: Table) => async (dispatch: any) => {
  try {
    const response = await tableService.update(id, body)
    if (response.status === 200) {
      toast.success('Mesa editado')
      dispatch({
        type: UPDATE_TABLE_SUCCESS,
        payload: {
          table: response.data,
        },
      })
    }
    return response
  } catch (error) {
    toast.error(error?.message)
  }
}

export const setQuery = (query: TableParams) => async (dispatch: any) => {
  dispatch({
    type: UPDATE_QUERY_TABLE,
    payload: {
      query,
    },
  })
}
