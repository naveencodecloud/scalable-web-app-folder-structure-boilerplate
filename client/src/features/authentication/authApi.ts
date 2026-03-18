// **Sample code for reference. Replace with your own implementation.**

import { apiClient } from '../../lib/apiClient';

interface LoginPayload {
    email: string;
    password: string;
}

interface AuthResponse {
    user: {
        id: string;
        email: string;
        role: string;
    };
    token: string;
}

export const authApi = {
    login: (data: LoginPayload) =>
        apiClient.post<AuthResponse>('/auth/login', data),

    register: (data: LoginPayload) =>
        apiClient.post<AuthResponse>('/auth/register', data),

    logout: () =>
        apiClient.post<void>('/auth/logout', {}),
};



// Call these from LoginForm and RegisterForm components.

// Example usage in LoginForm:
//   import { authApi } from '../authApi';
//   import { useAuth } from '../../../hooks/useAuth';
//   const { login } = useAuth();
//   const handleSubmit = async () => {
//     const res = await authApi.login({ email, password });
//     login(res.user, res.token); // saves to context + localStorage
//   };