import toast from 'react-hot-toast'
import api from '../config/api'
import authHeader from '../helpers/authHeader'
import { BlindInput, BlindParams, Blind } from '../types'

export async function create(values: BlindInput) {
  try {
    const response = await api.post('/blinds', values, {
      headers: authHeader(),
    })
    return response
  } catch (error) {
    toast.error('Ocorreu um erro')
  }
}

export async function list(params?: BlindParams) {
  try {
    const response = await api.get('/blinds', {
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
    const response = await api.get(`/blinds/${id}`, {
      headers: authHeader(),
    })
    return response
  } catch (error) {
    toast.error('Ocorreu um erro')
  }
}

export async function update(id: string, body: Blind) {
  try {
    const response = await api.put(`/blinds/${id}`, body, {
      headers: authHeader(),
    })
    return response
  } catch (error) {
    toast.error('Ocorreu um erro')
  }
}

export async function remove(id: string) {
  try {
    const response = await api.put(`/blinds/${id}`, {
      headers: authHeader(),
    })
    return response
  } catch (error) {
    toast.error('Ocorreu um erro')
  }
}
