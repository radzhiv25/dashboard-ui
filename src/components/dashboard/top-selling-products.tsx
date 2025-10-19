interface ProductData {
    name: string;
    price: number;
    quantity: number;
    amount: number;
}

const productData: ProductData[] = [
    { name: "ASOS Ridley High Waist", price: 79.49, quantity: 82, amount: 6518.18 },
    { name: "Marco Lightweight Shirt", price: 128.50, quantity: 37, amount: 4754.50 },
    { name: "Half Sleeve Shirt", price: 39.99, quantity: 64, amount: 2559.36 },
    { name: "Lightweight Jacket", price: 20.00, quantity: 184, amount: 3680.00 },
    { name: "Marco Shoes", price: 79.49, quantity: 64, amount: 1965.81 },
];

export default function TopSellingProducts() {
    return (
        <div className="p-6 bg-[#F7F9FB] dark:bg-white/5 rounded-2xl">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Top Selling Products</h3>

            <div className="overflow-x-auto">
                <table className="w-full">
                    {/* Table Header */}
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="text-left py-3 px-0 text-xs text-black/40 dark:text-white/40">
                                Name
                            </th>
                            <th className="text-right py-3 px-0 text-xs text-black/40 dark:text-white/40">
                                Price
                            </th>
                            <th className="text-right py-3 px-0 text-xs text-black/40 dark:text-white/40">
                                Quantity
                            </th>
                            <th className="text-right py-3 px-0 text-xs text-black/40 dark:text-white/40">
                                Amount
                            </th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {productData.map((product, index) => (
                            <tr key={index} className="">
                                <td className="py-4 px-0 text-xs text-black dark:text-white">
                                    {product.name}
                                </td>
                                <td className="py-4 px-0 text-xs text-black dark:text-white text-right">
                                    ${product.price.toFixed(2)}
                                </td>
                                <td className="py-4 px-0 text-xs text-black dark:text-white text-right">
                                    {product.quantity}
                                </td>
                                <td className="py-4 px-0 text-xs text-black dark:text-white text-right">
                                    ${product.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
