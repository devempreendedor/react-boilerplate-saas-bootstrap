export interface TournamentValueInput {
  tournament: string
  type: string
  amount: number
  fee: number
  chips: number
}

export interface TournamentValue extends TournamentValueInput {
  _id: string
}

export interface TournamentValueParams {
  q?: string
  status?: string
  limit?: string
  page?: string
  tournament?: string
}
