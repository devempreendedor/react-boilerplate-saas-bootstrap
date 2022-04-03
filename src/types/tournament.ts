export interface TournamentInput {
  name: string
  description?: string
  date: Date
  modality: string
  rebuy: boolean
  addon: boolean
}

export interface Tournament extends TournamentInput {
  _id: string
}

export interface TournamentParams {
  q?: string
  status?: string
  limit?: string
  page?: string
}
