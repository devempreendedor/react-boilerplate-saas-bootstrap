import { Customer } from './customer'

type Seat = {
  seat: number
  player: Customer
  status: string
}

export interface TableInput {
  status: string
  number: number
  totalSeats: number
  seats: Seat[] | []
}

export interface Table extends TableInput {
  _id: string
}

export interface TableParams {
  q?: string
  status?: string
  limit?: string
  page?: string
}
