import toast from 'react-hot-toast'
import api from '../config/api'
import authHeader from '../helpers/authHeader'
import {
  TournamentValueInput,
  TournamentValueParams,
  TournamentValue,
} from '../types'

export async function create(values: TournamentValueInput) {
  try {
    const response = await api.post('/tournament-values', values, {
      headers: authHeader(),
    })
    return response
  } catch (error) {
    toast.error('Ocorreu um erro')
  }
}

export async function list(params?: TournamentValueParams) {
  try {
    const response = await api.get('/tournament-values', {
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
    const response = await api.get(`/tournament-values/${id}`, {
      headers: authHeader(),
    })
    return response
  } catch (error) {
    toast.error('Ocorreu um erro')
  }
}

export async function update(id: string, body: TournamentValue) {
  try {
    const response = await api.put(`/tournament-values/${id}`, body, {
      headers: authHeader(),
    })
    return response
  } catch (error) {
    toast.error('Ocorreu um erro')
  }
}

export async function remove(id: string) {
  try {
    const response = await api.delete(`/tournament-values/${id}`, {
      headers: authHeader(),
    })
    return response
  } catch (error) {
    return error
    toast.error('Ocorreu um erro')
  }
}
