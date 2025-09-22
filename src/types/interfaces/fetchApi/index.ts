export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface IndexResponse<T> {
  status: number
  response: T
  success?: boolean
}

export interface FetchApiParams<T, C> {
  payload?: C extends T ? T : C
  fetchConfig?: RequestInit
  query?: Record<string, unknown>
}

export interface ApiService<T> {
  fetchApi: <C>(
    method?: ApiMethod,
    params?: FetchApiParams<T, C>,
  ) => Promise<IndexResponse<T>>
}
