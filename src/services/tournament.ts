import toast from 'react-hot-toast'
import api from '../config/api'
import authHeader from '../helpers/authHeader'
import { TournamentInput, TournamentParams, Tournament } from '../types'

export async function create(values: TournamentInput) {
  try {
    const response = await api.post('/tournaments', values, {
      headers: authHeader(),
    })
    return response
  } catch (error) {
    toast.error('Ocorreu um erro')
  }
}

export async function list(params?: TournamentParams) {
  try {
    const response = await api.get('/tournaments', {
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
    const response = await api.get(`/tournaments/${id}`, {
      headers: authHeader(),
    })
    return response
  } catch (error) {
    toast.error('Ocorreu um erro')
  }
}

export async function update(id: string, body: Tournament) {
  try {
    const response = await api.put(`/tournaments/${id}`, body, {
      headers: authHeader(),
    })
    return response
  } catch (error) {
    toast.error('Ocorreu um erro')
  }
}
