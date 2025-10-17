import { motion } from 'framer-motion'
import { useSidebar } from '../../hooks/useSidebar'

export default function LeftSidebar() {
    const { leftSidebarCollapsed, isMobile, closeSidebars } = useSidebar()

    return (
        <>
            {/* Mobile overlay backdrop */}
            {isMobile && !leftSidebarCollapsed && (
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
                className={`border-r border-black/10 dark:border-white/10 bg-white dark:bg-black/50 h-screen overflow-hidden ${isMobile ? 'fixed left-0 top-0 z-50' : 'relative'
                    }`}
                animate={{
                    width: leftSidebarCollapsed ? 0 : (isMobile ? window.innerWidth * 0.8 : 208),
                    opacity: leftSidebarCollapsed ? 0 : 1,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
                initial={false}
            >
                <div className={`h-screen ${isMobile ? 'w-3/4' : 'w-52'}`}>
                    {/* Sidebar content will go here */}
                    <div className="p-4">
                        <h2 className="text-lg font-semibold text-black dark:text-white mb-4">Left Sidebar</h2>
                    </div>
                </div>
            </motion.div>
        </>
    )
}