export interface Product {
    product_id: number;
    product_name: string;
    product_category: string;
    product_image: string;
    product_price: number;
    product_quantity: number;
    status?: string;
    cart_quantity?: number;
}
