export interface WorkerResponse {
  employees?: Worker[]
}

export interface Worker {
  id?: number
  name?: string
  role?: string
  phoneNumber?: string
}
