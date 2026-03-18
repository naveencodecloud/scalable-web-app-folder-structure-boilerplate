// **Sample code for reference. Replace with your own implementation.**

// A single wrapper around fetch() using the Facade design pattern.
// Instead of writing raw fetch() calls everywhere, all API calls go through here.

// In the example below, i’ve used localStorage, but it’s recommended to use in-memory state to store the token.

import { env } from '../data/env';

const API_BASE_URL = env.apiUrl;

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface RequestOptions {
    method?: HttpMethod;
    body?: unknown;
    headers?: HeadersInit;
}

const request = async <T>(
    url: string,
    options: RequestOptions = {}
): Promise<T> => {
    const token = localStorage.getItem('token');

    const res = await fetch(`${API_BASE_URL}${url}`, {
        method: options.method || 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
            ...options.headers,
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.message || 'API request failed');
    }

    return res.json() as Promise<T>;
};

export const apiClient = {
    get: <T>(url: string, headers?: HeadersInit) =>
        request<T>(url, { method: 'GET', headers }),

    post: <T>(url: string, body: unknown, headers?: HeadersInit) =>
        request<T>(url, { method: 'POST', body, headers }),

    put: <T>(url: string, body: unknown, headers?: HeadersInit) =>
        request<T>(url, { method: 'PUT', body, headers }),

    patch: <T>(url: string, body: unknown, headers?: HeadersInit) =>
        request<T>(url, { method: 'PATCH', body, headers }),

    delete: <T>(url: string, headers?: HeadersInit) =>
        request<T>(url, { method: 'DELETE', headers }),
};


// Usage in a feature file (e.g. features/products/productsApi.ts):
//   import { apiClient } from '../../lib/apiClient';
//   export const getProducts = () => apiClient.get<Product[]>('/products');
//   export const createProduct = (data: ProductPayload) => apiClient.post<Product>('/products', data);