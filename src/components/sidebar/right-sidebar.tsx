import { motion, AnimatePresence } from 'framer-motion'
import { useSidebar } from '../../hooks/useSidebar'
import { useState, useEffect } from 'react'
import { notifications, activities, contacts } from '../../data/right-sidebar-data'

export default function RightSidebar() {
    const { rightSidebarCollapsed, isMobile, closeSidebars } = useSidebar()
    const [isLoaded, setIsLoaded] = useState(false)

    // Enhanced animation variants for smoother interactions
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1
        }
    }

    const sectionVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.9
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
            x: -30,
            scale: 0.85
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1
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
            <AnimatePresence>
                {isMobile && !rightSidebarCollapsed && (
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
                className={`border-l border-black/10 dark:border-white/10 bg-white dark:bg-black/10 ${isMobile ? 'fixed right-0 top-0 z-50 h-screen' : 'relative h-full'
                    }`}
                initial={{
                    width: 0,
                    opacity: 0,
                }}
                animate={{
                    width: rightSidebarCollapsed ? 0 : (isMobile ? window.innerWidth * 0.8 : 288),
                    opacity: rightSidebarCollapsed ? 0 : 1,
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
                    {!rightSidebarCollapsed && (
                        <motion.div
                            className={`h-full overflow-y-auto ${isMobile ? 'w-full' : 'w-72'}`}
                            initial={{ opacity: 0, x: 30, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 30, scale: 0.95 }}
                            transition={{
                                duration: 0.3,
                                ease: [0.25, 0.1, 0.25, 1],
                                type: "spring",
                                stiffness: 400,
                                damping: 25
                            }}
                        >
                            <AnimatePresence>
                                {isLoaded && (
                                    <motion.div
                                        className="p-6 space-y-8"
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        transition={{
                                            staggerChildren: 0.08,
                                            delayChildren: 0.15,
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30
                                        }}
                                    >
                                        {/* Notifications Section */}
                                        <motion.div
                                            variants={sectionVariants}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                        >
                                            <motion.h3
                                                className="text-sm font-semibold text-black dark:text-white mb-4"
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
                                                            className="flex-shrink-0 size-6 rounded-md flex items-center justify-center"
                                                            style={{ backgroundColor: index % 2 === 0 ? '#E3F5FF' : '#E5ECF6' }}
                                                            variants={iconVariants}
                                                            transition={{ duration: 0.5, ease: "backOut" }}
                                                        >
                                                            <notification.icon size={16} className="text-black" />
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
                                                className="text-sm font-bold text-black dark:text-white mb-6"
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
                                                                    className=""
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
                                                                    <img
                                                                        src={activity.avatar.icon}
                                                                        alt={activity.avatar.name}
                                                                        className="size-6"
                                                                    />
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
                                                            <div className="flex-1 min-w-0">
                                                                <motion.p
                                                                    className="text-sm text-gray-900 dark:text-white font-medium leading-relaxed"
                                                                    initial={{ opacity: 0, x: 10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: 0.8 + index * 0.1 }}
                                                                >
                                                                    {activity.avatar.description}
                                                                </motion.p>
                                                                <motion.p
                                                                    className="text-xs text-gray-500 dark:text-gray-400"
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

                                        {/* Contacts Section */}
                                        <motion.div
                                            variants={sectionVariants}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                        >
                                            <motion.h3
                                                className="text-sm font-bold text-black dark:text-white mb-4"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: 0.6 }}
                                            >
                                                Contacts
                                            </motion.h3>
                                            <div className="space-y-3">
                                                {contacts.map((contact, index) => (
                                                    <motion.div
                                                        key={index}
                                                        className="flex items-center gap-3"
                                                        variants={itemVariants}
                                                        whileHover="hover"
                                                        whileTap="tap"
                                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                                    >
                                                        <motion.div
                                                            className={`size-6 ${contact.bg} dark:bg-gray-700 rounded-full flex items-center justify-center text-sm font-medium shadow-sm border-2 border-white dark:border-gray-800`}
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
                                                            <img
                                                                src={contact.avatar}
                                                                alt={contact.name}
                                                                className="size-6"
                                                            />
                                                        </motion.div>
                                                        <motion.p
                                                            className="text-sm text-gray-900 dark:text-white font-medium"
                                                            initial={{ opacity: 0, x: 10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.8 + index * 0.1 }}
                                                        >
                                                            {contact.name}
                                                        </motion.p>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>

                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    )
}
