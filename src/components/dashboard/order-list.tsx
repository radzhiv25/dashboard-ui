import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, FunnelSimple, SortAscending, MagnifyingGlass, Calendar, MapPin, DotsThree } from '@phosphor-icons/react'

interface Order {
    id: string
    user: {
        name: string
        avatar: string
    }
    project: string
    address: string
    date: string
    status: 'In Progress' | 'Complete' | 'Pending' | 'Approved' | 'Rejected'
    selected?: boolean
}

const statusColors = {
    'In Progress': 'bg-purple-500',
    'Complete': 'bg-green-500',
    'Pending': 'bg-blue-500',
    'Approved': 'bg-yellow-500',
    'Rejected': 'bg-gray-500'
}

const sampleOrders: Order[] = [
    {
        id: 'CM9801',
        user: { name: 'Natali Craig', avatar: '👩' },
        project: 'Landing Page',
        address: 'Meadow Lane Oakland',
        date: 'Just now',
        status: 'In Progress',
        selected: false
    },
    {
        id: 'CM9802',
        user: { name: 'Kate Morrison', avatar: '👩' },
        project: 'CRM Admin pages',
        address: 'Larry San Francisco',
        date: 'A minute ago',
        status: 'Complete',
        selected: false
    },
    {
        id: 'CM9803',
        user: { name: 'Drew Cano', avatar: '👨' },
        project: 'Client Project',
        address: 'Bagwell Avenue Ocala',
        date: '1 hour ago',
        status: 'Pending',
        selected: false
    },
    {
        id: 'CM9804',
        user: { name: 'Orlando Diggs', avatar: '👨' },
        project: 'Admin Dashboard',
        address: 'Washburn Baton Rouge',
        date: 'Yesterday',
        status: 'Approved',
        selected: true
    },
    {
        id: 'CM9805',
        user: { name: 'Andi Lane', avatar: '👩' },
        project: 'App Landing Page',
        address: 'Nest Lane Olivette',
        date: 'Feb 2, 2023',
        status: 'Rejected',
        selected: false
    },
    // Duplicate the data to show pagination
    {
        id: 'CM9806',
        user: { name: 'Natali Craig', avatar: '👩' },
        project: 'Landing Page',
        address: 'Meadow Lane Oakland',
        date: 'Just now',
        status: 'In Progress',
        selected: false
    },
    {
        id: 'CM9807',
        user: { name: 'Kate Morrison', avatar: '👩' },
        project: 'CRM Admin pages',
        address: 'Larry San Francisco',
        date: 'A minute ago',
        status: 'Complete',
        selected: false
    },
    {
        id: 'CM9808',
        user: { name: 'Drew Cano', avatar: '👨' },
        project: 'Client Project',
        address: 'Bagwell Avenue Ocala',
        date: '1 hour ago',
        status: 'Pending',
        selected: false
    },
    {
        id: 'CM9809',
        user: { name: 'Orlando Diggs', avatar: '👨' },
        project: 'Admin Dashboard',
        address: 'Washburn Baton Rouge',
        date: 'Yesterday',
        status: 'Approved',
        selected: false
    },
    {
        id: 'CM9810',
        user: { name: 'Andi Lane', avatar: '👩' },
        project: 'App Landing Page',
        address: 'Nest Lane Olivette',
        date: 'Feb 2, 2023',
        status: 'Rejected',
        selected: false
    }
]

export default function OrderList() {
    const [orders, setOrders] = useState<Order[]>(sampleOrders)
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5

    // Filter orders based on search term
    const filteredOrders = orders.filter(order =>
        order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // Calculate pagination
    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentOrders = filteredOrders.slice(startIndex, endIndex)

    const handleSelectOrder = (orderId: string) => {
        setOrders(prev => prev.map(order =>
            order.id === orderId ? { ...order, selected: !order.selected } : order
        ))
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
        >
            {/* Header */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Order List</h2>
                    <div className="flex items-center gap-3">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                        >
                            <Plus size={20} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                            <FunnelSimple size={20} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                            <SortAscending size={20} />
                        </motion.button>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative">
                    <MagnifyingGlass
                        size={20}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th className="px-6 py-3 text-left">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Order ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                User
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Project
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Address
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">

                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                        {currentOrders.map((order, index) => (
                            <motion.tr
                                key={order.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            >
                                <td className="px-6 py-4">
                                    <input
                                        type="checkbox"
                                        checked={order.selected}
                                        onChange={() => handleSelectOrder(order.id)}
                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                    #{order.id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-sm mr-3">
                                            {order.user.avatar}
                                        </div>
                                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                                            {order.user.name}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                                    {order.project}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center text-sm text-gray-900 dark:text-white">
                                        <MapPin size={16} className="mr-2 text-gray-400" />
                                        {order.address}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center text-sm text-gray-900 dark:text-white">
                                        <Calendar size={16} className="mr-2 text-gray-400" />
                                        {order.date}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className={`w-2 h-2 rounded-full ${statusColors[order.status]} mr-2`}></div>
                                        <span className="text-sm text-gray-900 dark:text-white">{order.status}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    {order.status === 'Rejected' && (
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                        >
                                            <DotsThree size={20} />
                                        </motion.button>
                                    )}
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-end">
                    <div className="flex items-center space-x-2">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <span className="text-sm">‹</span>
                        </motion.button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <motion.button
                                key={page}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handlePageChange(page)}
                                className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${currentPage === page
                                        ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                            >
                                {page}
                            </motion.button>
                        ))}

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <span className="text-sm">›</span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
