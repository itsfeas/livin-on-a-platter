interface RequestOptions {
    method?: 'GET' | 'POST' | 'DELETE';
    headers?: HeadersInit;
    body?: BodyInit;
}

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
    const body = JSON.stringify(data);
    const response = await fetch(url, { method: 'POST', body, ...options });
    return handleResponse(response) as T;
}

const del = async <T>(url: string, options?: RequestOptions): Promise<T> => {
    const response = await fetch(url, { method: 'DELETE', ...options });
    return handleResponse(response) as T;
}

export const httpClient = {
    get,
    post,
    delete: del,
};