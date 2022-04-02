import toast from 'react-hot-toast'
import api from '../config/api'
import authHeader from '../helpers/authHeader'
import { CustomerInput, CustomerParams, Customer } from '../types'

export async function create(values: CustomerInput) {
  try {
    const response = await api.post('/customers', values, {
      headers: authHeader(),
    })
    return response
  } catch (error) {
    toast.error('Ocorreu um erro')
  }
}

export async function list(params?: CustomerParams) {
  try {
    const response = await api.get('/customers', {
      headers: authHeader(),
      params,
    })
    return response
  } catch (error) {
    toast.error('Ocorreu um erro')
  }
}

export async function findById(id: string) {
  try {
    const response = await api.get(`/customers/${id}`, {
      headers: authHeader(),
    })
    return response
  } catch (error) {
    toast.error('Ocorreu um erro')
  }
}

export async function update(id: string, body: Customer) {
  try {
    const response = await api.put(`/customers/${id}`, body, {
      headers: authHeader(),
    })
    return response
  } catch (error) {
    toast.error('Ocorreu um erro')
  }
}
