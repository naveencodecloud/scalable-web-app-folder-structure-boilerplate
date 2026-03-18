// **Sample code for reference. Replace with your own implementation.**

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    category: string;
    inStock: boolean;
    images: string[];
    createdAt: string;
    updatedAt: string;
}

// USAGE
// import { Product } from '../../../shared/types/product';
// const getProducts = (): Promise<Product[]> => apiClient.get('/products');

// NOTE: These are `.d.ts` files — they only export types, so they add zero bytes to your production bundle.