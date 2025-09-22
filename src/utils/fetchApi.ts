import { getAuthorizationHeader } from './authorizationHeader'
import { isEmptyObject } from './object'
import PostPutError from '~/errors/post-put-error'
import type {
  ApiService,
  FetchApiParams,
  IndexResponse,
} from '~/types/interfaces/fetchApi'

export function fetchApiService<T>(
  url: string,
  initConfig?: RequestInit,
  requiredAuth = true,
): ApiService<T> {
  return {
    async fetchApi<C>(
      method = 'GET',
      params: FetchApiParams<T, C> = {},
    ): Promise<IndexResponse<T>> {
      let fetchOptions: RequestInit = { method, ...initConfig }
      let completeUrl = url

      if (params?.query && !isEmptyObject(params?.query)) {
        const stringParams: Record<string, string> = {}
        Object.keys(params.query).forEach((key) => {
          if (params.query) stringParams[key] = String(params.query[key])
        })

        const queryString = new URLSearchParams(stringParams).toString()
        completeUrl += `?${queryString}`
      }

      if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
        if (!params?.payload) throw new PostPutError('payload: is required')

        fetchOptions = {
          ...fetchOptions,
          ...params.fetchConfig,
          body: JSON.stringify(params.payload),
          headers: {
            ...fetchOptions?.headers,
            ...params?.fetchConfig?.headers,
            'Content-Type': 'application/json',
            ...(requiredAuth ? getAuthorizationHeader() : null),
          },
        }
      } else {
        fetchOptions = {
          ...fetchOptions,
          ...params?.fetchConfig,
        }
      }

      const fetched = await fetch(completeUrl, fetchOptions)
      const response = await fetched.json()
      const status = fetched.status
      const success = fetched.ok

      return { status, response, success }
    },
  }
}
