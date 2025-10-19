import { ClockCounterClockwise, Sidebar, Star, Sun, Bell, MagnifyingGlass, Command, Moon, X } from '@phosphor-icons/react'
import { useSidebar } from '../../hooks/useSidebar'
import { useTheme } from '../../context/theme-context'
import { useDashboard } from '../../context/dashboard-context'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const { leftSidebarCollapsed, rightSidebarCollapsed, isMobile, toggleLeftSidebar, toggleRightSidebar } = useSidebar()
    const { theme, toggleTheme } = useTheme()
    const { selectedDashboard, setSelectedDashboard } = useDashboard()
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    return (
        <>
            <div className="border-b border-black/10 dark:border-white/10 bg-white dark:bg-black/10 w-full h-16 px-4 md:px-7 py-5 flex items-center justify-between">
                {/* Left side - Mobile: only sidebar toggle, Desktop: sidebar + breadcrumb */}
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-4">
                        <button
                            onClick={toggleLeftSidebar}
                            className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded transition-colors"
                            title={leftSidebarCollapsed ? "Expand left sidebar" : "Collapse left sidebar"}
                        >
                            <Sidebar weight="duotone" size={20} className="text-black dark:text-white" />
                        </button>
                        <Star weight="duotone" size={20} className="text-black dark:text-white" />
                    </span>
                    {/* Breadcrumb - hidden on mobile */}
                    <div className="hidden md:flex items-center gap-2">
                        <p className="text-sm text-black/40 dark:text-white/40">Dashboards</p>
                        <p className="text-sm text-black/40 dark:text-white/40">/</p>
                        <motion.button
                            onClick={() => setSelectedDashboard(selectedDashboard === 'Default' ? 'Order List' : 'Default')}
                            className="text-sm text-black dark:text-white hover:text-black/70 dark:hover:text-white/70 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.1 }}
                        >
                            {selectedDashboard}
                        </motion.button>
                    </div>
                </div>

                {/* Right side - Mobile: search button + theme toggle + right sidebar toggle, Desktop: full search + all icons */}
                <div className="flex items-center gap-2 md:gap-4">
                    {/* Search - Mobile: button only, Desktop: full search bar */}
                    {isMobile ? (
                        <motion.button
                            onClick={() => setIsSearchOpen(true)}
                            className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded transition-colors"
                            title="Search"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.1 }}
                        >
                            <MagnifyingGlass weight="duotone" size={20} className="text-black dark:text-white" />
                        </motion.button>
                    ) : (
                        <div className="w-40 flex items-center justify-between px-4 py-2 rounded-lg bg-black/5 dark:bg-white/5 text-black/20 dark:text-white/20">
                            <span className="flex items-center gap-2">
                                <MagnifyingGlass size={20} className="" />
                                <p>Search</p>
                            </span>
                            <span className="flex items-center">
                                <Command size={20} className="" />
                                <p>/</p>
                            </span>
                        </div>
                    )}

                    <span className="flex items-center gap-2 md:gap-4">
                        {/* Theme toggle - always visible */}
                        <button
                            onClick={toggleTheme}
                            className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded transition-colors"
                            title={theme === 'light' ? "Switch to dark mode" : "Switch to light mode"}
                        >
                            {theme === 'light' ? (
                                <Sun weight="duotone" size={20} className="text-black dark:text-white" />
                            ) : (
                                <Moon weight="duotone" size={20} className="text-black dark:text-white" />
                            )}
                        </button>

                        {/* Other icons - hidden on mobile */}
                        <div className="hidden md:flex items-center gap-4">
                            <ClockCounterClockwise weight="duotone" size={20} className="text-black dark:text-white" />
                            <Bell weight="duotone" size={20} className="text-black dark:text-white" />
                        </div>

                        {/* Right sidebar toggle - always visible */}
                        <button
                            onClick={toggleRightSidebar}
                            className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded transition-colors"
                            title={rightSidebarCollapsed ? "Expand right sidebar" : "Collapse right sidebar"}
                        >
                            <Sidebar weight="duotone" size={20} className="text-black dark:text-white" />
                        </button>
                    </span>
                </div>
            </div>

            {/* Mobile Search Overlay */}
            <AnimatePresence>
                {isSearchOpen && isMobile && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-20 px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div
                            className="w-full max-w-md bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700"
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-700">
                                <MagnifyingGlass size={20} className="text-gray-400 dark:text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none"
                                    autoFocus
                                />
                                <motion.button
                                    onClick={() => setIsSearchOpen(false)}
                                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.1 }}
                                >
                                    <X size={20} className="text-gray-500 dark:text-gray-400" />
                                </motion.button>
                            </div>
                            <div className="p-4">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Search results will appear here...</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}