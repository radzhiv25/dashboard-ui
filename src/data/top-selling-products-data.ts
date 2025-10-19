export interface ProductData {
    name: string;
    price: number;
    quantity: number;
    amount: number;
}

export const productData: ProductData[] = [
    { name: "ASOS Ridley High Waist", price: 79.49, quantity: 82, amount: 6518.18 },
    { name: "Marco Lightweight Shirt", price: 128.50, quantity: 37, amount: 4754.50 },
    { name: "Half Sleeve Shirt", price: 39.99, quantity: 64, amount: 2559.36 },
    { name: "Lightweight Jacket", price: 20.00, quantity: 184, amount: 3680.00 },
    { name: "Marco Shoes", price: 79.49, quantity: 64, amount: 1965.81 },
];
