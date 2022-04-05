import toast from 'react-hot-toast'
import api from '../config/api'
import authHeader from '../helpers/authHeader'
import { TableInput, TableParams, Table } from '../types'

export async function create(values: TableInput) {
  try {
    const response = await api.post('/tables', values, {
      headers: authHeader(),
    })
    return response
  } catch (error) {
    toast.error('Ocorreu um erro')
  }
}

export async function list(params?: TableParams) {
  try {
    const response = await api.get('/tables', {
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
    const response = await api.get(`/tables/${id}`, {
      headers: authHeader(),
    })
    return response
  } catch (error) {
    toast.error('Ocorreu um erro')
  }
}

export async function update(id: string, body: Table) {
  try {
    const response = await api.put(`/tables/${id}`, body, {
      headers: authHeader(),
    })
    return response
  } catch (error) {
    toast.error('Ocorreu um erro')
  }
}
