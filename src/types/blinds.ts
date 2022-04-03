export interface BlindInput {
  tournament: string
  type: string
  smallBlind?: number
  bigBlind?: number
  ante?: number
  duration: number
}

export interface Blind extends BlindInput {
  _id: string
}

export interface BlindParams {
  q?: string
  status?: string
  limit?: string
  page?: string
}
