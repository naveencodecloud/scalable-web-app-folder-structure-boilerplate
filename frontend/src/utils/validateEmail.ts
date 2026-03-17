// **Sample code for reference. Replace with your own implementation.**

// Usage:
//   import { validateEmail } from '../utils/validateEmail';
//   if (!validateEmail(email)) setError('Invalid email address');

export const validateEmail = (email: string): boolean => {
    if (!email) return false;

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email.toLowerCase());
};
