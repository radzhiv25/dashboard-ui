import { productData } from '../../data/top-selling-products-data'

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
