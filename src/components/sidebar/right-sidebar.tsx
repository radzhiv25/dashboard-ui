import { motion, AnimatePresence } from 'framer-motion'
import { useSidebar } from '../../hooks/useSidebar'
import { Bug, User, Broadcast } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'

export default function RightSidebar() {
    const { rightSidebarCollapsed, isMobile, closeSidebars } = useSidebar()
    const [isLoaded, setIsLoaded] = useState(false)

    // Sample data for notifications
    const notifications = [
        { icon: Bug, text: "You have a bug that needs...", time: "Just now" },
        { icon: User, text: "New user registered", time: "59 minutes ago" },
        { icon: Bug, text: "You have a bug that needs...", time: "12 hours ago" },
        { icon: Broadcast, text: "Andi Lane subscribed to you", time: "Today, 11:59 AM" }
    ]

    // Sample data for activities with detailed avatar info
    const activities = [
        {
            avatar: {
                bg: "bg-blue-100",
                text: "👨",
                name: "John Doe",
                description: "You have a bug that needs..."
            },
            time: "Just now"
        },
        {
            avatar: {
                bg: "bg-green-100",
                text: "👩",
                name: "Sarah Wilson",
                description: "Released a new version"
            },
            time: "59 minutes ago"
        },
        {
            avatar: {
                bg: "bg-purple-100",
                text: "👩",
                name: "Aisha Ahmed",
                description: "Submitted a bug"
            },
            time: "12 hours ago"
        },
        {
            avatar: {
                bg: "bg-orange-100",
                text: "👨",
                name: "Marcus Johnson",
                description: "Modified A data in Page X"
            },
            time: "Today, 11:59 AM"
        },
        {
            avatar: {
                bg: "bg-gray-100",
                text: "👨",
                name: "Alex Chen",
                description: "Deleted a page in Project X"
            },
            time: "Feb 2, 2023"
        }
    ]

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const sectionVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1
        }
    }

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -20,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1
        },
        hover: {
            scale: 1.02,
            x: 4
        },
        tap: {
            scale: 0.98
        }
    }

    const iconVariants = {
        hidden: {
            scale: 0,
            rotate: -180
        },
        visible: {
            scale: 1,
            rotate: 0
        },
        hover: {
            scale: 1.1,
            rotate: 5
        }
    }


    // Trigger load animation when sidebar opens
    useEffect(() => {
        if (!rightSidebarCollapsed) {
            const timer = setTimeout(() => setIsLoaded(true), 100)
            return () => clearTimeout(timer)
        } else {
            setIsLoaded(false)
        }
    }, [rightSidebarCollapsed])

    return (
        <>
            {/* Mobile overlay backdrop */}
            {isMobile && !rightSidebarCollapsed && (
                <motion.div
                    className="fixed inset-0 bg-black/50 z-40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={closeSidebars}
                />
            )}

            <motion.div
                className={`border-l border-black/10 dark:border-white/10 bg-white dark:bg-black/90 h-screen overflow-hidden ${isMobile ? 'fixed right-0 top-0 z-50' : 'relative'
                    }`}
                animate={{
                    width: rightSidebarCollapsed ? 0 : (isMobile ? window.innerWidth * 0.8 : 288),
                    opacity: rightSidebarCollapsed ? 0 : 1,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
                initial={false}
            >
                <div className={`h-screen overflow-y-auto ${isMobile ? 'w-full' : 'w-72'}`}>
                    <AnimatePresence>
                        {isLoaded && (
                            <motion.div
                                className="p-6 space-y-8"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                {/* Notifications Section */}
                                <motion.div
                                    variants={sectionVariants}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    <motion.h3
                                        className="text-lg font-semibold text-black dark:text-white mb-4"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        Notifications
                                    </motion.h3>
                                    <div className="space-y-4">
                                        {notifications.map((notification, index) => (
                                            <motion.div
                                                key={index}
                                                className="flex items-start gap-3"
                                                variants={itemVariants}
                                                whileHover="hover"
                                                whileTap="tap"
                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                            >
                                                <motion.div
                                                    className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-md flex items-center justify-center"
                                                    variants={iconVariants}
                                                    transition={{ duration: 0.5, ease: "backOut" }}
                                                >
                                                    <notification.icon size={16} className="text-blue-600 dark:text-blue-400" />
                                                </motion.div>
                                                <div className="flex-1 min-w-0">
                                                    <motion.p
                                                        className="text-sm text-gray-900 dark:text-white font-medium"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 0.3 + index * 0.1 }}
                                                    >
                                                        {notification.text}
                                                    </motion.p>
                                                    <motion.p
                                                        className="text-xs text-gray-500 dark:text-gray-400 mt-1"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 0.4 + index * 0.1 }}
                                                    >
                                                        {notification.time}
                                                    </motion.p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Activities Section */}
                                <motion.div
                                    variants={sectionVariants}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    <motion.h3
                                        className="text-lg font-bold text-black dark:text-white mb-6"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    >
                                        Activities
                                    </motion.h3>
                                    <div className="relative">
                                        <div className="space-y-6">
                                            {activities.map((activity, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="flex items-start gap-4 relative"
                                                    variants={itemVariants}
                                                    whileHover="hover"
                                                    whileTap="tap"
                                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                                >
                                                    {/* Avatar with timeline connector */}
                                                    <div className="flex-shrink-0 relative z-10">
                                                        <motion.div
                                                            className={`w-8 h-8 ${activity.avatar.bg} dark:bg-gray-700 rounded-full flex items-center justify-center text-sm font-medium shadow-sm border-2 border-white dark:border-gray-800 relative`}
                                                            initial={{ scale: 0, rotate: -180 }}
                                                            animate={{ scale: 1, rotate: 0 }}
                                                            transition={{
                                                                duration: 0.5,
                                                                delay: 0.7 + index * 0.1,
                                                                ease: "backOut"
                                                            }}
                                                            whileHover={{
                                                                scale: 1.05,
                                                                transition: { duration: 0.2 }
                                                            }}
                                                        >
                                                            {activity.avatar.text}
                                                        </motion.div>
                                                        {/* Timeline connector line with gap - only show if not the last item */}
                                                        {index < activities.length - 1 && (
                                                            <motion.div
                                                                className="absolute left-1/2 top-8 w-0.5 h-6 bg-gray-300 dark:bg-gray-600 transform -translate-x-1/2"
                                                                initial={{ scaleY: 0, originY: 0 }}
                                                                animate={{ scaleY: 1 }}
                                                                transition={{
                                                                    duration: 0.6,
                                                                    delay: 0.8 + index * 0.1,
                                                                    ease: "easeOut"
                                                                }}
                                                            />
                                                        )}
                                                    </div>

                                                    {/* Content */}
                                                    <div className="flex-1 min-w-0 pt-1">
                                                        <motion.p
                                                            className="text-sm text-gray-900 dark:text-white font-medium leading-relaxed"
                                                            initial={{ opacity: 0, x: 10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.8 + index * 0.1 }}
                                                        >
                                                            {activity.avatar.description}
                                                        </motion.p>
                                                        <motion.p
                                                            className="text-xs text-gray-500 dark:text-gray-400 mt-1"
                                                            initial={{ opacity: 0, x: 10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.9 + index * 0.1 }}
                                                        >
                                                            {activity.time}
                                                        </motion.p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>

                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </>
    )
}