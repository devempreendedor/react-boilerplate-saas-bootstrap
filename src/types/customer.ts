export interface CustomerInput {
  name: string
  document: string
  phone?: string
  email?: string
}

export interface Customer extends CustomerInput {
  _id: string
}

export interface CustomerParams {
  q?: string
  status?: string
  limit?: string
  page?: string
}
