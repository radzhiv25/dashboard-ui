import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useSidebar } from '../../hooks/useSidebar'
import { useDashboard } from '../../context/dashboard-context'
import { BookOpenIcon, CaretRightIcon, ChartPieIcon, ChatsTeardropIcon, FolderIcon, IdentificationBadgeIcon, IdentificationCardIcon, NotebookIcon, ShoppingBagOpenIcon, UsersThreeIcon, ListBullets } from '@phosphor-icons/react'
import ProfileIcon from '../../assets/icons/ByeWind.svg'

export default function LeftSidebar() {
    const { leftSidebarCollapsed, isMobile, closeSidebars } = useSidebar()
    const { selectedDashboard, setSelectedDashboard } = useDashboard()

    // State for expanded sections
    const [expandedSections, setExpandedSections] = useState({
        userProfile: true,
        ecommerce: false,
        projects: false,
        onlineCourses: false,
        account: false,
        corporate: false,
        blog: false,
        social: false
    })

    // Animation variants for smoother interactions
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -20, scale: 0.9 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1
        }
    }

    // Toggle section expansion
    const toggleSection = (section: keyof typeof expandedSections) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }))
    }

    return (
        <>
            {/* Mobile overlay backdrop */}
            <AnimatePresence>
                {isMobile && !leftSidebarCollapsed && (
                    <motion.div
                        className="fixed inset-0 bg-black/10 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.25,
                            ease: [0.25, 0.1, 0.25, 1],
                            type: "spring",
                            stiffness: 350,
                            damping: 30
                        }}
                        onClick={closeSidebars}
                    />
                )}
            </AnimatePresence>

            <motion.div
                className={`border-r border-black/10 dark:border-white/10 bg-white dark:bg-black/10 h-screen overflow-hidden ${isMobile ? 'fixed left-0 top-0 z-50' : 'relative'
                    }`}
                initial={{
                    width: 0,
                    opacity: 0,
                }}
                animate={{
                    width: leftSidebarCollapsed ? 0 : (isMobile ? window.innerWidth * 0.8 : 208),
                    opacity: leftSidebarCollapsed ? 0 : 1,
                }}
                exit={{
                    width: 0,
                    opacity: 0,
                }}
                transition={{
                    duration: 0.25,
                    ease: [0.25, 0.1, 0.25, 1],
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                }}
            >
                <AnimatePresence>
                    {!leftSidebarCollapsed && (
                        <motion.div
                            className={`h-screen px-4 py-5 text-sm flex flex-col gap-4 ${isMobile ? 'w-3/4' : 'w-52'}`}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            {/* Sidebar content will go here */}
                            <div className="flex items-center gap-2">
                                <img src={ProfileIcon} alt="Logo" className="size-6" />
                                <h2 className=" font-semibold text-black dark:text-white">ByeWind</h2>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className='flex items-center gap-1 text-sm'>
                                    <p className="text-black/50 dark:text-white/40 px-2 py-1">Favorites</p>
                                    <p className="text-black/50 dark:text-white/20">Recently</p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <motion.p
                                        className="py-1 px-2 text-black/70 dark:text-white cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 rounded transition-all duration-200"
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.02, x: 4 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    >
                                        Overview
                                    </motion.p>
                                    <motion.p
                                        className="py-1 px-2 text-black/70 dark:text-white cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 rounded transition-all duration-200"
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.02, x: 4 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    >
                                        Projects
                                    </motion.p>
                                </div>
                                <div className='flex flex-col gap-2 pb-3'>
                                    <h3 className="text-black/50 dark:text-white/50 text-sm font-medium px-2">Dashboards</h3>

                                    {/* Default Dashboard - Selected State */}
                                    <motion.div
                                        className={`flex items-center gap-1 rounded-lg py-1 pr-2 cursor-pointer transition-all duration-200 ${selectedDashboard === 'Default'
                                            ? 'bg-black/5 dark:bg-white/5'
                                            : 'hover:bg-black/5 dark:hover:bg-white/5'
                                            }`}
                                        onClick={() => setSelectedDashboard('Default')}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <motion.div
                                            className={`border-l-2 border-[#C6C7F8] w-6 h-3 rounded-r-full ${selectedDashboard === 'Default'
                                                ? 'opacity-100'
                                                : 'opacity-0'
                                                }`}
                                            animate={{
                                                opacity: selectedDashboard === 'Default' ? 1 : 0
                                            }}
                                            transition={{ duration: 0.2 }}
                                        />
                                        <div className='flex items-center gap-1 text-black dark:text-white'>
                                            <ChartPieIcon weight="duotone" size={20} />
                                            <p>Default</p>
                                        </div>
                                    </motion.div>

                                    {/* Order List Dashboard */}
                                    <motion.div
                                        className={`flex items-center gap-1 rounded-lg py-1 pr-2 cursor-pointer transition-all duration-200 ${selectedDashboard === 'Order List'
                                            ? 'bg-black/5 dark:bg-white/5'
                                            : 'hover:bg-black/5 dark:hover:bg-white/5'
                                            }`}
                                        onClick={() => setSelectedDashboard('Order List')}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <motion.div
                                            className={`border-l-2 border-[#C6C7F8] w-6 h-3 rounded-r-full ${selectedDashboard === 'Order List'
                                                ? 'opacity-100'
                                                : 'opacity-0'
                                                }`}
                                            animate={{
                                                opacity: selectedDashboard === 'Order List' ? 1 : 0
                                            }}
                                            transition={{ duration: 0.2 }}
                                        />
                                        <div className='flex items-center gap-1 text-black dark:text-white'>
                                            <ListBullets weight="duotone" size={20} />
                                            <p>Order List</p>
                                        </div>
                                    </motion.div>

                                    {/* eCommerce */}
                                    <motion.div
                                        className="flex items-center gap-2 py-2 px-2 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-all duration-200"
                                        onClick={() => toggleSection('ecommerce')}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <motion.div
                                            animate={{ rotate: expandedSections.ecommerce ? 90 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <CaretRightIcon size={16} className="text-black/50 dark:text-white/50" />
                                        </motion.div>
                                        <ShoppingBagOpenIcon weight="duotone" size={20} className="text-black/60 dark:text-white" />
                                        <span className="text-black/70 dark:text-white">eCommerce</span>
                                    </motion.div>

                                    {/* Projects */}
                                    <motion.div
                                        className="flex items-center gap-2 py-2 px-2 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-all duration-200"
                                        onClick={() => toggleSection('projects')}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <motion.div
                                            animate={{ rotate: expandedSections.projects ? 90 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <CaretRightIcon size={16} className="text-black/50 dark:text-white/50" />
                                        </motion.div>
                                        <FolderIcon weight="duotone" size={20} className="text-black/60 dark:text-white" />
                                        <span className="text-black/70 dark:text-white">Projects</span>
                                    </motion.div>

                                    {/* Online Courses */}
                                    <motion.div
                                        className="flex items-center gap-2 py-2 px-2 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-all duration-200"
                                        onClick={() => toggleSection('onlineCourses')}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <motion.div
                                            animate={{ rotate: expandedSections.onlineCourses ? 90 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <CaretRightIcon size={16} className="text-black/50 dark:text-white/50" />
                                        </motion.div>
                                        <BookOpenIcon weight="duotone" size={20} className="text-black/60 dark:text-white" />
                                        <span className="text-black/70 dark:text-white">Online Courses</span>
                                    </motion.div>
                                </div>
                                <div className='flex flex-col gap-1 pb-3'>
                                    <h3 className="text-black/50 dark:text-white/50 text-sm font-medium px-2">Pages</h3>

                                    {/* User Profile - Expandable */}
                                    <div className="flex flex-col gap-1">
                                        <motion.div
                                            className="flex items-center gap-2 py-2 px-2 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-all duration-200"
                                            onClick={() => toggleSection('userProfile')}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <motion.div
                                                animate={{ rotate: expandedSections.userProfile ? 90 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <CaretRightIcon size={16} className="text-black/50 dark:text-white/50" />
                                            </motion.div>
                                            <IdentificationBadgeIcon weight="duotone" size={20} className="text-black/60 dark:text-white" />
                                            <span className="text-black/70 dark:text-white">User Profile</span>
                                        </motion.div>

                                        <AnimatePresence>
                                            {expandedSections.userProfile && (
                                                <motion.div
                                                    className="flex flex-col gap-1 ml-6"
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {['Overview', 'Projects', 'Campaigns', 'Documents', 'Followers'].map((item, index) => (
                                                        <motion.p
                                                            key={item}
                                                            className="py-1 px-2 text-black/60 dark:text-white cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 rounded transition-all duration-200"
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 0.2, delay: index * 0.05 }}
                                                            whileHover={{ scale: 1.02, x: 4 }}
                                                        >
                                                            {item}
                                                        </motion.p>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Account */}
                                    <motion.div
                                        className="flex items-center gap-2 py-2 px-2 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-all duration-200"
                                        onClick={() => toggleSection('account')}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <motion.div
                                            animate={{ rotate: expandedSections.account ? 90 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <CaretRightIcon size={16} className="text-black/50 dark:text-white/50" />
                                        </motion.div>
                                        <IdentificationCardIcon weight="duotone" size={20} className="text-black/60 dark:text-white" />
                                        <span className="text-black/70 dark:text-white">Account</span>
                                    </motion.div>

                                    {/* Corporate */}
                                    <motion.div
                                        className="flex items-center gap-2 py-2 px-2 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-all duration-200"
                                        onClick={() => toggleSection('corporate')}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <motion.div
                                            animate={{ rotate: expandedSections.corporate ? 90 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <CaretRightIcon size={16} className="text-black/50 dark:text-white/50" />
                                        </motion.div>
                                        <UsersThreeIcon weight="duotone" size={20} className="text-black/60 dark:text-white" />
                                        <span className="text-black/70 dark:text-white">Corporate</span>
                                    </motion.div>

                                    {/* Blog */}
                                    <motion.div
                                        className="flex items-center gap-2 py-2 px-2 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-all duration-200"
                                        onClick={() => toggleSection('blog')}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <motion.div
                                            animate={{ rotate: expandedSections.blog ? 90 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <CaretRightIcon size={16} className="text-black/50 dark:text-white/50" />
                                        </motion.div>
                                        <NotebookIcon weight="duotone" size={20} className="text-black/60 dark:text-white" />
                                        <span className="text-black/70 dark:text-white">Blog</span>
                                    </motion.div>

                                    {/* Social */}
                                    <motion.div
                                        className="flex items-center gap-2 py-2 px-2 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-all duration-200"
                                        onClick={() => toggleSection('social')}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <motion.div
                                            animate={{ rotate: expandedSections.social ? 90 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <CaretRightIcon size={16} className="text-black/50 dark:text-white/50" />
                                        </motion.div>
                                        <ChatsTeardropIcon weight="duotone" size={20} className="text-black/60 dark:text-white" />
                                        <span className="text-black/70 dark:text-white">Social</span>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    )
}