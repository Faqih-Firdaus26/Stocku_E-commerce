export interface Category {
    id: number;
    name: string;
    description?: string;
    products_count?: number;
}

export interface Review {
    id: number;
    rating: number;
    comment: string;
    created_at: string;
    user: {
        name: string;
    };
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    category_id: number;
    image: string;
    category: Category;
    reviews: Review[];
    created_at: string;
    updated_at: string;
}
