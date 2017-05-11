export const handleError = (error, data) => {
  error.data = data
  return error
}
