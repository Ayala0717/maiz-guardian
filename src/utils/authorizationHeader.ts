import { getLocalStorage } from './storage'

export function getAuthorizationHeader() {
  return { Authorization: `Bearer ${getLocalStorage('token')}` }
}
