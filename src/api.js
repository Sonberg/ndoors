const baseUrl = process.env.REACT_APP_API_URL

export const url = baseUrl;
export const get = endpoint => fetch(`${baseUrl}/${endpoint}`)
export const post = (endpoint, body) =>
    fetch(`${baseUrl}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: typeof (body) === 'object' ? JSON.stringify(body) : body
    })


export const remove = (endpoint) =>
    fetch(`${baseUrl}/${endpoint}`, {
        method: 'DELETE'
    })