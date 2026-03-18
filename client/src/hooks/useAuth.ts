// **Sample code for reference. Replace with your own implementation.**

import { useContext } from 'react';
import { AuthContext } from '../app/context/AuthContext';

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
    return ctx;
};

// *** `useAuth.ts` | Access AuthContext — returns `{ user, token, login, logout, isAuthenticated }` ***

// Usage:
//   import { useAuth } from '../hooks/useAuth';
//   const MyComponent = () => {
//     const { user, isAuthenticated, logout } = useAuth();
//     return <button onClick={logout}>Logout {user?.email}</button>;
//   };