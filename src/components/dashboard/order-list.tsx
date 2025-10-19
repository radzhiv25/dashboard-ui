import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Plus, FunnelSimple, SortAscending, MagnifyingGlass, Calendar, MapPin, DotsThree } from '@phosphor-icons/react'
import { statusColors, sampleOrders, statusTextColors, statusDarkTextColors, statusDarkColors } from '../../data/order-data'
import type { Order, SortField, SortDirection } from '../../data/order-data'


export default function OrderList() {
    const [orders, setOrders] = useState<Order[]>(sampleOrders)
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [sortField, setSortField] = useState<SortField>('id')
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc')
    const [statusFilter, setStatusFilter] = useState<string>('all')
    const [showStatusFilter, setShowStatusFilter] = useState(false)
    const [showSortMenu, setShowSortMenu] = useState(false)
    const filterRef = useRef<HTMLDivElement>(null)
    const sortRef = useRef<HTMLDivElement>(null)
    const itemsPerPage = 10

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
                setShowStatusFilter(false)
            }
            if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
                setShowSortMenu(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    // Filter orders based on search term and status
    const filteredOrders = orders.filter(order => {
        const matchesSearch = order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.status.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesStatus = statusFilter === 'all' || order.status === statusFilter

        return matchesSearch && matchesStatus
    })

    // Sort orders
    const sortedOrders = [...filteredOrders].sort((a, b) => {
        let aValue: string | number
        let bValue: string | number

        switch (sortField) {
            case 'id':
                aValue = a.id
                bValue = b.id
                break
            case 'user':
                aValue = a.user.name
                bValue = b.user.name
                break
            case 'project':
                aValue = a.project
                bValue = b.project
                break
            case 'date':
                // Convert relative dates to sortable format
                aValue = getDateValue(a.date)
                bValue = getDateValue(b.date)
                break
            case 'status':
                aValue = a.status
                bValue = b.status
                break
            default:
                return 0
        }

        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
        return 0
    })

    // Helper function to convert relative dates to sortable values
    const getDateValue = (dateStr: string): number => {
        const now = new Date()
        if (dateStr === 'Just now') return now.getTime()
        if (dateStr === 'A minute ago') return now.getTime() - 60000
        if (dateStr.includes('hour')) {
            const hours = parseInt(dateStr.split(' ')[0])
            return now.getTime() - (hours * 60 * 60 * 1000)
        }
        if (dateStr === 'Yesterday') return now.getTime() - (24 * 60 * 60 * 1000)
        if (dateStr.includes(',')) {
            return new Date(dateStr).getTime()
        }
        return now.getTime()
    }

    // Calculate pagination
    const totalPages = Math.ceil(sortedOrders.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentOrders = sortedOrders.slice(startIndex, endIndex)

    const handleSelectOrder = (orderId: string) => {
        setOrders(prev => prev.map(order =>
            order.id === orderId ? { ...order, selected: !order.selected } : order
        ))
    }

    const handleSelectAll = () => {
        const allSelected = currentOrders.every(order => order.selected)
        setOrders(prev => prev.map(order => ({
            ...order,
            selected: currentOrders.some(currOrder => currOrder.id === order.id) ? !allSelected : order.selected
        })))
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }


    const handleStatusFilter = (status: string) => {
        setStatusFilter(status)
        setCurrentPage(1) // Reset to first page when filtering
    }

    const handleSortSelect = (field: SortField) => {
        setSortField(field)
        setSortDirection('asc')
        setShowSortMenu(false)
        setCurrentPage(1) // Reset to first page when sorting
    }

    const toggleSortDirection = () => {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    }

    const isAllSelected = currentOrders.length > 0 && currentOrders.every(order => order.selected)
    const isIndeterminate = currentOrders.some(order => order.selected) && !isAllSelected

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-transparent"
        >
            {/* Header */}
            <div className=" border-gray-200 dark:border-gray-700">
                <h2 className="text-sm font-semibold px-4 pb-4 text-gray-900 dark:text-white">Order List</h2>
                <div className="bg-[#F7F9FB] dark:bg-white/5 flex items-center justify-between mb-4 p-2 rounded-lg">
                    <div className="">
                        <div className="flex items-center gap-3">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-2 rounded-lg text-black dark:text-white hover:bg-black/5 transition-colors"
                            >
                                <Plus size={20} />
                            </motion.button>
                            <div className="relative" ref={filterRef}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setShowStatusFilter(!showStatusFilter)}
                                    className={`p-2 rounded-lg text-black dark:text-white transition-colors ${statusFilter !== 'all' ? ' dark:hover:bg-white/5' : ''}`}
                                >
                                    <FunnelSimple size={20} />
                                </motion.button>
                                {showStatusFilter && (
                                    <div className="absolute top-12 left-0 bg-white dark:bg-black rounded-lg shadow-lg z-10 min-w-[150px]">
                                        <div className="py-2">
                                            <button
                                                onClick={() => handleStatusFilter('all')}
                                                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${statusFilter === 'all' ? 'bg-blue-50 dark:bg-black/10 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}
                                            >
                                                All Status
                                            </button>
                                            {['In Progress', 'Complete', 'Pending', 'Approved', 'Rejected'].map(status => (
                                                <button
                                                    key={status}
                                                    onClick={() => handleStatusFilter(status)}
                                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center ${statusFilter === status ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}
                                                >
                                                    <div className={`w-2 h-2 rounded-full ${statusColors[status as keyof typeof statusColors]} mr-2`}></div>
                                                    {status}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="relative" ref={sortRef}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setShowSortMenu(!showSortMenu)}
                                    className={`p-2 rounded-lg text-black dark:text-white transition-colors ${sortField ? 'dark:hover:bg-white/5' : ''}`}
                                >
                                    <SortAscending size={20} />
                                </motion.button>
                                {showSortMenu && (
                                    <div className="absolute top-12 left-0 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10 min-w-[180px]">
                                        <div className="py-2">
                                            <div className="px-4 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider border-b border-gray-200 dark:border-gray-700">
                                                Sort by
                                            </div>
                                            {[
                                                { field: 'id' as SortField, label: 'Order ID' },
                                                { field: 'user' as SortField, label: 'User' },
                                                { field: 'project' as SortField, label: 'Project' },
                                                { field: 'date' as SortField, label: 'Date' },
                                                { field: 'status' as SortField, label: 'Status' }
                                            ].map(({ field, label }) => (
                                                <button
                                                    key={field}
                                                    onClick={() => handleSortSelect(field)}
                                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between ${sortField === field ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}
                                                >
                                                    {label}
                                                    {sortField === field && (
                                                        <SortAscending
                                                            size={12}
                                                            className={sortDirection === 'desc' ? 'rotate-180' : ''}
                                                        />
                                                    )}
                                                </button>
                                            ))}
                                            {sortField && (
                                                <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                                                    <button
                                                        onClick={toggleSortDirection}
                                                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center text-gray-700 dark:text-gray-300"
                                                    >
                                                        <SortAscending
                                                            size={12}
                                                            className={`mr-2 ${sortDirection === 'desc' ? 'rotate-180' : ''}`}
                                                        />
                                                        {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
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
                            className="w-40 pl-10 pr-4 py-2 border border-gray-300 dark:border-white/20 rounded-lg bg-white/40 dark:bg-black/10 text-gray-900 dark:text-white placeholder-black/40 dark:placeholder-white/20 outline-none"
                        />
                    </div>
                </div>

            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full table-fixed">
                    <thead className="border-b">
                        <tr>
                            <th className="w-8 px-6 py-3 text-left">
                                <input
                                    type="checkbox"
                                    checked={isAllSelected}
                                    ref={(el) => {
                                        if (el) el.indeterminate = isIndeterminate
                                    }}
                                    onChange={handleSelectAll}
                                    className="rounded border-gray-300 text-[#C6C7F8] focus:[#C6C7F8]"
                                />
                            </th>
                            <th className="w-32 px-6 py-3 text-left text-xs font-medium text-black/40 dark:text-white/40 uppercase tracking-wider">
                                Order ID
                            </th>
                            <th className="w-48 px-6 py-3 text-left text-xs font-medium text-black/40 dark:text-white/40 uppercase tracking-wider">
                                User
                            </th>
                            <th className="w-40 px-6 py-3 text-left text-xs font-medium text-black/40 dark:text-white/40 uppercase tracking-wider">
                                Project
                            </th>
                            <th className="w-56 px-6 py-3 text-left text-xs font-medium text-black/40 dark:text-white/40 uppercase tracking-wider">
                                Address
                            </th>
                            <th className="w-40 px-6 py-3 text-left text-xs font-medium text-black/40 dark:text-white/40 uppercase tracking-wider">
                                Date
                            </th>
                            <th className="w-36 px-6 py-3 text-left text-xs font-medium text-black/40 dark:text-white/40 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="w-10 px-6 py-3 text-left text-xs font-medium text-black/40 dark:text-white/40 uppercase tracking-wider">

                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-transparent divide-y divide-gray-200 dark:divide-white/20 min-h-[400px]">
                        {currentOrders.map((order, index) => (
                            <motion.tr
                                key={order.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="group hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer transition-colors h-16"
                            >
                                <td className="px-6 py-4">
                                    <input
                                        type="checkbox"
                                        checked={order.selected}
                                        onChange={() => handleSelectOrder(order.id)}
                                        className="rounded border-gray-300 text-[#C6C7F8] focus:ring-[#C6C7F8]"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                    #{order.id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="size-6 rounded-full flex items-center justify-center mr-3">
                                            <img
                                                src={order.user.avatar}
                                                alt={`${order.user.name} avatar`}
                                                className="size-6 object-contain"
                                            />
                                        </div>
                                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                                            {order.user.name}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                                    {order.project}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center text-sm text-gray-900 dark:text-white">
                                        <MapPin size={16} className="mr-2 text-gray-400 flex-shrink-0" />
                                        <span className="truncate max-w-[200px]" title={order.address}>
                                            {order.address}
                                        </span>
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
                                        <div className={`w-2 h-2 rounded-full ${statusColors[order.status]} dark:${statusDarkColors[order.status]} mr-2`}></div>
                                        <span className={`text-sm ${statusTextColors[order.status]} dark:${statusDarkTextColors[order.status]}`}>{order.status}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-opacity ${order.selected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                            }`}
                                    >
                                        <DotsThree size={20} />
                                    </motion.button>
                                </td>
                            </motion.tr>
                        ))}
                        {/* Fill remaining rows to maintain consistent layout */}
                        {Array.from({ length: Math.max(0, itemsPerPage - currentOrders.length) }, (_, index) => (
                            <tr key={`empty-${index}`} className="h-16">
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                            </tr>
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
                            className="size-8 flex items-center justify-center p-2 rounded-lg bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
                                    ? 'bg-gray-200 dark:bg-white/10 text-gray-900 dark:text-white'
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
                            className="size-8 flex items-center justify-center p-2 rounded-lg bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <span className="text-sm">›</span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

