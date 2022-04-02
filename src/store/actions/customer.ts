import { LIST_CUSTOMERS_SUCCESS, GET_CUSTOMER_SUCCESS } from '../types'
import { customerService } from '../../services'
import toast from 'react-hot-toast'
import { CustomerParams } from '../../types'

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
