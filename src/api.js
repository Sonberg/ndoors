const baseUrl = process.env.REACT_APP_API_URL

export const url = baseUrl;

export const get = async endpoint => {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
        method: 'GET',
        credentials: 'include',
        headers: headers()
    });

    return handleResponse(response);
}

export const post = async (endpoint, body) => {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
        method: 'POST',
        credentials: 'include',
        headers: headers(),
        body: normilizeBody(body)
    });
    return handleResponse(response);
}

export const patch = async (endpoint, body) => {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
        method: 'PATCH',
        credentials: 'include',
        headers: headers(),
        body: normilizeBody(body)
    });
    return handleResponse(response);
}


export const remove = async endpoint => {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
        headers: headers(),
        credentials: 'include',
        method: 'DELETE'
    });
    return handleResponse(response);
}

const handleResponse = async response => {
    try {
        if (response.status >= 400) {
            return null;
        }

        const content = await response.text();

        if (!content) {
            return content;
        }

        return JSON.parse(content);
    } catch (error) {
        return null;
    }
}

const normilizeBody = body => typeof (body) === 'object' ? JSON.stringify(body) : body
const headers = () => ({
    'Content-Type': 'application/json'
})