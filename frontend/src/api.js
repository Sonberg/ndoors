const baseUrl = process.env.REACT_APP_API_URL;

export const get = endpoint => fetch(`${baseUrl}/${endpoint}`);
export const post = (endpoint, body) => fetch(`${baseUrl}/${endpoint}`, {
    method: 'POST',
    body
});