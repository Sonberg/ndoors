const baseUrl = process.env.REACT_APP_API_URL
console.log(baseUrl)
export const get = endpoint => fetch(`${baseUrl}/${endpoint}`)
export const post = (endpoint, body) =>
  fetch(`${baseUrl}/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  })
