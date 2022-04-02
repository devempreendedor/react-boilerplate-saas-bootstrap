import toast from 'react-hot-toast'
import api from '../config/api'
import authHeader from '../helpers/authHeader'

export async function login(values: any) {
  try {
    const response = await api.post('/auth/login', values, {
      headers: authHeader(),
    })
    if (response.status === 200) {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))
    }
    return response
  } catch (error) {
    toast.error('Ocorreu um erro')
  }
}
