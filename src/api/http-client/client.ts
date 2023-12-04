interface RequestOptions {
    headers?: HeadersInit;
}

const BASE_URL = "http://localhost:8080/api/v1/";

const handleResponse = async (response: Response) => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        return response.json();
    }

    return response.text();
}

const get = async <T>(url: string, options?: RequestOptions): Promise<T> => {
    const response = await fetch(url, { method: 'GET', ...options });
    return handleResponse(response) as T;
}

const post = async <T>(url: string, data: any, options?: RequestOptions): Promise<T> => {
    const response = await fetch(url, { method: 'POST', body: data, ...options });
    return handleResponse(response) as T;
}

const del = async <T>(url: string, options?: RequestOptions): Promise<T> => {
    const response = await fetch(url, { method: 'DELETE', ...options });
    return handleResponse(response) as T;
}

export const httpClient = {
    BASE_URL,
    get,
    post,
    delete: del,
};