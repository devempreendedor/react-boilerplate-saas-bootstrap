import {
  LIST_CUSTOMERS_SUCCESS,
  GET_CUSTOMER_SUCCESS,
  CREATE_CUSTOMER_SUCCESS,
  UPDATE_QUERY_CUSTOMER,
} from '../types'
import { customerService } from '../../services'
import toast from 'react-hot-toast'
import { CustomerInput, CustomerParams } from '../../types'

export const create = (values: CustomerInput) => async (dispatch: any) => {
  try {
    const response = await customerService.create(values)
    if (response.status === 201) {
      toast.success('Cliente criado com sucesso!')
      dispatch({
        type: CREATE_CUSTOMER_SUCCESS,
        payload: {
          customer: response.data,
        },
      })
    }
    return response
  } catch (error) {
    toast.error(error?.message)
  }
}

export const list = (params?: CustomerParams) => async (dispatch: any) => {
  try {
    const response = await customerService.list(params)
    if (response.status === 200) {
      dispatch({
        type: LIST_CUSTOMERS_SUCCESS,
        payload: {
          customers: response.data?.results,
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
    const response = await customerService.findById(id)
    if (response.status === 200) {
      dispatch({
        type: GET_CUSTOMER_SUCCESS,
        payload: {
          customer: response.data,
        },
      })
    }
    return response
  } catch (error) {
    toast.error(error?.message)
  }
}

export const setQuery = (query: CustomerParams) => async (dispatch: any) => {
  dispatch({
    type: UPDATE_QUERY_CUSTOMER,
    payload: {
      query,
    },
  })
}
