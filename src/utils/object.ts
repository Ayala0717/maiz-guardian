/**
 * Check if object is empty
 *
 * @param object - The object to evaluate
 *
 * @returns If object is empty
 */
export function isEmptyObject<T>(object: T): boolean {
  if (!object) return true
  return Object.entries(object).length === 0
}
