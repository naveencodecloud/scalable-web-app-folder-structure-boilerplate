// **Sample code for reference. Replace with your own implementation.**

import { apiClient } from '../../lib/apiClient';

interface UpdateProfilePayload {
    name?: string;
    email?: string;
    avatarUrl?: string;
}

interface UpdatePasswordPayload {
    currentPassword: string;
    newPassword: string;
}

interface UserProfile {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string;
}

export const userApi = {
    getMe: () =>
        apiClient.get<UserProfile>('/users/me'),

    updateProfile: (data: UpdateProfilePayload) =>
        apiClient.patch<UserProfile>('/users/me', data),

    updatePassword: (data: UpdatePasswordPayload) =>
        apiClient.patch<void>('/users/me/password', data),
};
