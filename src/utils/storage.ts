/**
 * Get token from localstorage
 *
 * @return The value from localstorage
 */
export function getLocalStorage(name: string): string {
  return localStorage.getItem(name) || ''
}

/**
 * Set token in localstorage
 *
 * @param value - The value to store in localstorage
 */
export function setLocalStorage(name: string, value: string): void {
  localStorage.setItem(name, value)
}

/**
 * Check if token exists in localstorage
 *
 * @returns If value exists in localstorage
 */
export function hasLocalStorage(name: string): boolean {
  return localStorage.getItem(name) !== null
}

/**
 * Remove value from localstorage
 */
export function removeLocalStorage(name: string): void {
  localStorage.removeItem(name)
}
