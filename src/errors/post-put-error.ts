export default class PostPutError extends Error {
  constructor(message: string) {
    super()
    this.name = 'PostPutError'
    this.stack = ''
    this.message = message
  }
}
