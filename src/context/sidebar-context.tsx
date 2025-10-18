import { createContext, useState, useEffect, type ReactNode } from 'react'

interface SidebarContextType {
    leftSidebarCollapsed: boolean
    rightSidebarCollapsed: boolean
    isMobile: boolean
    toggleLeftSidebar: () => void
    toggleRightSidebar: () => void
    closeSidebars: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: ReactNode }) {
    const [leftSidebarCollapsed, setLeftSidebarCollapsed] = useState(false)
    const [rightSidebarCollapsed, setRightSidebarCollapsed] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            const wasMobile = isMobile
            const nowMobile = window.innerWidth < 768

            setIsMobile(nowMobile)

            // If switching from desktop to mobile, close all sidebars
            if (!wasMobile && nowMobile) {
                setLeftSidebarCollapsed(true)
                setRightSidebarCollapsed(true)
            }
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)

        return () => window.removeEventListener('resize', checkMobile)
    }, [isMobile])

    // Prevent body scroll when mobile sidebar is open
    useEffect(() => {
        if (isMobile && (!leftSidebarCollapsed || !rightSidebarCollapsed)) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }

        return () => {
            document.body.classList.remove('no-scroll')
        }
    }, [isMobile, leftSidebarCollapsed, rightSidebarCollapsed])

    const toggleLeftSidebar = () => {
        setLeftSidebarCollapsed(prev => !prev)
        // On mobile, close right sidebar when opening left
        if (isMobile && leftSidebarCollapsed) {
            setRightSidebarCollapsed(true)
        }
    }

    const toggleRightSidebar = () => {
        setRightSidebarCollapsed(prev => !prev)
        // On mobile, close left sidebar when opening right
        if (isMobile && rightSidebarCollapsed) {
            setLeftSidebarCollapsed(true)
        }
    }

    const closeSidebars = () => {
        setLeftSidebarCollapsed(true)
        setRightSidebarCollapsed(true)
    }

    return (
        <SidebarContext.Provider
            value={{
                leftSidebarCollapsed,
                rightSidebarCollapsed,
                isMobile,
                toggleLeftSidebar,
                toggleRightSidebar,
                closeSidebars,
            }}
        >
            {children}
        </SidebarContext.Provider>
    )
}

// Export the context for use in the hook
export { SidebarContext }
