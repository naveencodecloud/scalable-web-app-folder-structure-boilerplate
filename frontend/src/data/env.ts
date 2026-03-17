// **Sample code for reference. Replace with your own implementation.**

// Instead of scattering `import.meta.env.VITE_XYZ` throughout the code, centralize it here.
// If a variable name changes, you only update one file.

export const env = {
    apiUrl: import.meta.env.VITE_API_URL as string,
};


// Usage:
//   import { env } from '../data/env';
//   c