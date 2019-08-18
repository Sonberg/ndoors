import Jsona from 'jsona'

const dataFormatter = new Jsona();
const baseUrl = process.env.REACT_APP_API_URL

export const url = baseUrl;

export const get = async (endpoint, options = {}) => {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
        method: 'GET',
        credentials: 'include',
        headers: headers(),
        signal: options.signal
    });

    return handleResponse(response);
}

export const post = async (endpoint, body, options = {}) => {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
        method: 'POST',
        credentials: 'include',
        headers: headers(),
        body: normilizeBody(body, options.serialize),
        signal: options.signal
    });
    return handleResponse(response);
}

export const put = async (endpoint, body, options = {}) => {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
        method: 'PUT',
        credentials: 'include',
        headers: headers(),
        body: normilizeBody(body, options.serialize),
        signal: options.signal
    });
    return handleResponse(response);
}

export const patch = async (endpoint, body, options = {}) => {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
        method: 'PATCH',
        credentials: 'include',
        headers: headers(),
        body: normilizeBody(body, options.serialize),
        signal: options.signal
    });
    return handleResponse(response);
}


export const remove = async (endpoint, options = {}) => {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
        headers: headers(),
        credentials: 'include',
        method: 'DELETE',
        signal: options.signal
    });
    return handleResponse(response);
}

const handleResponse = async response => {
    try {
        const content = await response.text();

        if (!content) {
            return null;
        }

        return dataFormatter.deserialize(JSON.parse(content));
    } catch (error) {
        return null;
    }
}

const normilizeBody = (stuff, serialize = true) => JSON.stringify(serialize ? dataFormatter.serialize({ stuff, includeNames: ['user', 'createdBy'] }) : stuff);
const headers = () => ({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : null
})