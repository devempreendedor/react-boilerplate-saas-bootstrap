import { LOGIN_SUCCESS } from '../types'
import { authService } from '../../services'
import toast from 'react-hot-toast'

export const login = (values: any) => async (dispatch: any) => {
  try {
    const response = await authService.login(values)
    if (response.status === 201) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {},
      })
    }
    return response
  } catch (error) {
    toast.error(error?.message)
  }
}
